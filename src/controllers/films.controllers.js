import items from '../database/MostPopularMovies.json' assert {type:'json'}
import shows from '../database/MostPopularTVs.json' assert {type:'json'}
import films from '../database/BoxOffice.json' assert {type:'json'}

//retorna o MostPopularMovies.json
 export const getAllPopularFilms = async(req, res) => {
    return res.json({items})
}

//rota para acessar um filme no MostPopularMovies.json
export const getPopularFilmsId = async(req,res) => {
    const id = items.items.find(p=> p.id === (req.params.id));
    if(!id) return res.status(404).send("Filme não encontrado");
    res.send(id)
}

//retorna o MostPopularTVs.json
export const getAllPopularTv = async(req, res) => {
    return res.json({shows})
}

//rota para acessar um filme no MostTVs.json
export const getPopularTvId = async(req,res) => {
    const id = shows.shows.find(p=> p.id === (req.params.id));
    if(!id) return res.status(404).send("Programa não encontrado");
    res.send(id)
}
//retorna o BoxOffice.json
export const getAllBoxOffice = async(req, res) => {
    return res.json({films})
}

//rota para acessar um filme no MostTVs.json
export const getBoxOfficeId = async(req,res) => {
    const id = films.films.find(p=> p.id === (req.params.id));
    if(!id) return res.status(404).send("Programa não encontrado");
    res.send(id)
}


//localhost:XXXX


