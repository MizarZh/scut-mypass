const request = require('request');
const https = require('https');
const superagent = require('superagent');
const cheerio = require('cheerio');
// const strEnc = require('./des');

let url = 'https://enroll.scut.edu.cn/door/health/h5/health.html',
  loginPostUrl =
    'https://sso.scut.edu.cn/cas/login?service=https://iamok.scut.edu.cn/cas/login',
  getDataUrl = 'https://enroll.scut.edu.cn/door/health/h5/get',
  postDataUrl = 'https://enroll.scut.edu.cn/door/health/h5/add';

let a = {
  test: 1,
  test2: 2
};
for (let [k, v] of [a.keys(), a[a.keys()]]) {
  console.log(k + '    ' + v);
}
