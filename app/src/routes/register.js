// "use strict";

// const express = require('express');
// const router = express.Router();

// const logger = require('../config/logger.js');

// router.get('/', (req, res) => {
//     logger.info("GET \'/register\' \'회원가입 화면으로 이동\'");
//     res.render('register.ejs');
// });

// router.post('/', async (req, res) => {
    
// })

// module.exports = router;




"use strict";

const express = require('express');
const router = express.Router();
const { User } = require('../models/index.js');

const logger = require('../config/logger.js');

router.get('/', (req, res) => {
    logger.info("GET \'/register\' \'회원가입 화면으로 이동\'");
    res.render('register.ejs');
});

router.post('/', (req, res) => {
    class User2 {
        constructor(body) {
            this.body = body;
        };

        register() {
            const client = this.body;

            try {
                const response = dao.insert(client);
                return response;
            } catch(err) {
                return { success: false, err };
            }
        }
    }
    const client = new User2(req.body);
    console.log(client);
    console.log(req.body);
//     // const client = req.body;
//     // console.log(client);
//     // class User {
//     //   constructor(body) {
//     //     this.body = req.body;
//     //   }
//     // }
//     // console.log(this.body);
//     // console.log(req.body);
//     // User.create()
const user = new User2(req.body);
const response = await user.register(); // User.js의 register 함수

// log의 두 번째 파라미터를 변수로 빼줬음
const url = { // object /register
    method: "POST",
    path: "/register",
    status: response.err ? 409 : 201
    // register는 정상응답 반응으로 201 반환해야함
    // 데이터가 생성되는 것이기 때문에
    // 여기 에러는 데이터베이스 에러이므로 서버측 에러이기 때문에 400(클라이언트측 에러)이 아니라 500번대를 반환해주는게 맞음
    // 409는 클라이언트가 회원가입 할 때 아이디가 이미 있는 아이디인 경우 데이터베이스와 충돌하므로 그 때 발생시키는 에러코드임
};

log(response, url);
return res.status(url.status).json(response);
})

const dao = {
    // 등록
    insert(params) {
    //   return new Promise((resolve, reject) => {
        User.create(params).then((inserted) => {
          // password는 제외하고 리턴함
          const insertedResult = { ...inserted };
          delete insertedResult.dataValues.password;
          resolve(inserted);
    //     }).catch((err) => {
    //       reject(err);
    //     });
      });
    }
}
//

module.exports = router;