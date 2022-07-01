import conn from "./connectMongo";
import formatDate from "./formatDate";
import Thread from "../models/Thread";

const pushMessage = async (idThread, message) => {
  try {
    const update = await Thread.updateOne({
      _id: idThread
    }, {
      $push: {
        messages: {
          time: formatDate(new Date(), "/", ":"),
          message
        }}
    });
    return update;
  }catch(err) {
    return err;
  }
}

export default pushMessage;