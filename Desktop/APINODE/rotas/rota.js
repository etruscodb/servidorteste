const express = require('express')
const rota = express.Router()
const mongoose = require ('mongoose');
require('../models/livro')
const Livro = mongoose.model('Livro')



    rota.get('/base',(req, res)=>{

        Livro.find({}).then(Livro =>{
  
          return res.json(Livro)
        })
        .catch((err) => {
  
          return res.status(400).json({
  
              erro:true,
              message:"nenhum artigo encontrado"
  
          })
  
        })
      })


rota.post('/cadastro',(req, res)=>{

     
    const livro = Livro.create( req.body,(err)=>{


      if (err){
        return res.status(400).json({

            erro:true,
            message:"Não foi possivel cadastrar"


        })
        
      }

      return res.status(200).json({

        erro:false,
        message:"Cadastro Realizado com Sucesso"


    })


    })

    })






module.exports = rota