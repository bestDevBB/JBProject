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

        login() {
            const client = this.body;

            try {
                const user = dao.insert()
            } catch {
                
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

module.exports = router;