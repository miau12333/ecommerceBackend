const { create } = require("../services/users.services")

static async create(data){ //ConversationPartipants
    try {
        const { createdBy, tittle, participants } = data; //consideramos que data viene del body y ya trae todo.
        const conversation = await Conversations.create({ title, createdBy }); //Devuelve el registro de la base de datos
        const conversationId = conversation.id; //Sacamos el Id de la conversación creada.
        const conversationParticipants = participants.map((userId) => {
           return  conversationId, userId;
        });
        conversationParticipants.forEach(async participant => await Paticipants.create(participant));
    }
    catch (error) {
        throw error;
    }
}