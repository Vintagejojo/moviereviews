import MoviesDAO from '../dao/moviesDAO.js';

export default class MoviesController {
  static async apiGetMovies(req, res, next) {
    try {
      const moviesPerPage = parseInt(req.query.moviesPerPage) || 20;
      const page = parseInt(req.query.page) || 0;
      const filters = {};

      const { moviesList, totalNumMovies } = await MoviesDAO.getMovies({ filters, page, moviesPerPage });

      const response = {
        movies: moviesList,
        page: page,
        filters: filters,
        entries_per_page: moviesPerPage,
        total_results: totalNumMovies,
      };
      res.json(response);
    } catch (e) {
      console.error(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }

  static async apiGetMovieById(req, res, next) {
    try {
      const id = req.params.id || {};
      const movie = await MoviesDAO.getMovieById(id);

      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }

      res.json(movie);
    } catch (e) {
      console.error(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }

  static async apiGetRatings(req, res, next) {
    try {
      const propertyTypes = await MoviesDAO.getRatings();
      res.json(propertyTypes);
    } catch (e) {
      console.error(`api,${e}`);
      res.status(500).json({ error: e });
    }
  }
}
