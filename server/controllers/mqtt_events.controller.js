import MqttEvent from '../models/MqttEvent.model';
import sanitizeHtml from 'sanitize-html';
import cuid from 'cuid';

export function getMqttEvents(req, res) {
  MqttEvent.find().sort({ created: 'desc'}).limit(20).exec((err, mqtt_events) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(mqtt_events);
  });
}

export function getMqttEventsByTopic(req, res) {
  MqttEvent.find()
    .sort({ created: 'desc'})
    .where('topic').equals(req.params.topic)
    .limit(parseInt(req.query.limit))
    .exec((err, mqtt_events) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({mqtt_events});
    }
  );
}


// export function addEvent(req, res) {
//   if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
//     res.status(403).end();
//   }
//
//   const newPost = new MqttEvent(req.body.post);
//
//   // Let's sanitize inputs
//   newPost.title = sanitizeHtml(newPost.title);
//   newPost.name = sanitizeHtml(newPost.name);
//   newPost.content = sanitizeHtml(newPost.content);
//
//   newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
//   newPost.cuid = cuid();
//   newPost.save((err, saved) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ post: saved });
//   });
// }


//
// /**
//  * Delete a post
//  * @param req
//  * @param res
//  * @returns void
//  */
// export function deletePost(req, res) {
//   Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//
//     post.remove(() => {
//       res.status(200).end();
//     });
//   });
// }
