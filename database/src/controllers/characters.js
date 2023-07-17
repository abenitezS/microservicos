const express = require("express")
const { Router } = require("express")
const router = Router()
const axios = require("axios")
const { Character } = require("../database")

router.get("/", async (req, res) => {
  const data = await Character.list()
  res.json(data)
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  const data = await Character.get(id)
  res.json(data)
})

router.post("/", async (req, res) => {
  const data = await Character.insert(req.body)
  res.json(data)
})
