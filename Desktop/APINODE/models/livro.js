const { Timestamp } = require('bson');
const mongoose = require ('mongoose');

const Livro = new mongoose.Schema({

      nome:{

            type: String,
            require: true

      },

      autor:{

            type: String,
            require: true
 
      },

      email_contato:{

             type: String,
             require: true

      },
  
      objetivo:{

        type: String,
        require: true

      },
   
       
   
},
{

    timestamps:true
}


)

mongoose.model('Livro', Livro);