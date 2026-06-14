// 主要功能：把資料庫中的 17 個 SDGs 資料查出來，回傳給前端顯示卡牌。有一個 API：
// GET /api/sdgs：回傳 17 個 SDGs 目標的資料，前端會用這些資料來顯示卡牌區。


import express from 'express'

import { db } from '../database/db.js'

const router = express.Router()

// 讀取 17 個 SDGs 目標，提供前端卡牌區顯示。
router.get('/', (req, res) => {
  db.all('SELECT * FROM sdgs ORDER BY number ASC', [], (err, rows) => {
    if (err) {
      return res.status(500).json(err)
    }

    return res.json(rows)
  })
})

export default router