import Episode from "../models/Episode.js"

const createEpisode = async (req, res) => {
  try {
    const newEpisode = new Episode(req.body)
    const savedMovie = await newEpisode.save()
    res.json(savedMovie)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEpisode = async (req, res) => {
  try {
    const { id } = req.params

    const episode = await Episode.findById(id)
    if (!episode) {
      return res.status(404).json(`Not found`)
    }
    res.json(episode)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export {
  createEpisode,
  getEpisode,
}