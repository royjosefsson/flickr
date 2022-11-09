const Flickr = require('flickr-sdk');

let flickr = new Flickr(process.env.FLICKR_API_KEY)

const settings = {
  privacy_filter: 1,
  safe_search: 1,
  extras: "url_m,description",
}

export default async function handler(req, res) {
  const { text, page = 1, per_page = 20 } = req.query
  if (req.method !== 'GET') {
    return res.status(200).json({ error: null, data: { page: null, pages: null, photo: [] } })
  }

  if (text === "") {
    return res.status(400).json({ error: null, data: { page: null, pages: null, photo: [] } })
  }

  let response

  try {
    response = await flickr.photos.search({ ...settings, page, text, per_page })
  } catch (error) {
    return res.status(500).json({ error: error.message, data: { page: null, pages: null, photo: [] } })
  }

  return res.status(200).json({ error: null, data: response.body.photos })
}
