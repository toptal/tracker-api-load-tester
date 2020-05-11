const https = require('https');
const parse = require('csv-parse');
const fs = require('fs');
const axios = require('axios');

const parser = parse({delimeter: '\n'});

const readUsers = () => {
  const users = [];

  const stream = fs.createReadStream('users.csv').pipe(parse())

  return new Promise((resolve, reject) => {
    stream.on('data', r => {
      users.push(r);
    })
    stream.on('error', reject)
    stream.on('end', () => {
      resolve(users)
    })
  })
}


const getToken = (email, password) => {
  const url = `${process.env.ARTILLERY_TRACKER_TARGET}\\sessions`;

  const request = axios.post(url, {
    password: password,
    email: email
  })

  return new Promise((resolve, reject) => {
    request.then((res) => {
      const token = res['data']['access_token'];
      resolve(token);
    })
    request.catch((err) => {
      console.log(err);
      reject();
    })
  });
}

(async () => {
  const tokens = [];
  const users = await readUsers();

  requests = users.map((user) => {
    return getToken(user[0], user[1])
  });

  await Promise.all(requests)
    .then(responses => responses.map((r) => tokens.push(r)))
    .catch(err => console.log(err))

  file = fs.writeFile('tokens.csv', tokens.join('\n'), (err) => console.log(err))
})();
