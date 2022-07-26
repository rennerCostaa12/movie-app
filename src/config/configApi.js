import axios from "axios";
import { useEffect, useState } from "react";

export const key = 'ce87f3188394e1833369a82d69bf9164';
export const base_url = 'https://api.themoviedb.org/3/';


export function getDataApi(typeRequisition, page) {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);

    switch (typeRequisition) {
        case 'Trending':
            useEffect(() => {
                axios.get(`${base_url}trending/all/day?api_key=${key}`)
                    .then(function (response) {
                        setLoading(true);
                        setDatas(response.data);
                        setLoading(false);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }, [])

            return { datas, loading }

        case 'Tv':
            useEffect(() => {
                axios.get(`${base_url}tv/top_rated?api_key=${key}&language=pt-BR&page=${page}`)
                    .then(function (response) {
                        setLoading(true);
                        setDatas(response.data);
                        setLoading(false);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

            }, [page])

            return { datas, loading }

        case 'Movies':
            useEffect(() => {
                axios.get(`${base_url}movie/popular?api_key=${key}&language=pt-BR&page=${page}`)
                    .then(function (response) {
                        setLoading(true);
                        setDatas(response.data);
                        setLoading(false);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

            }, [page])

            return { datas, loading }
    }
}

export function getDataDetailsApi(typeRequisition, id) {
    const [datasDetails, setDatasDetails] = useState([]);
    const [loading, setLoading] = useState(false);

    switch (typeRequisition) {
        case 'MoviesDetails':
            useEffect(() => {
                axios.get(`${base_url}movie/${id}?api_key=${key}&language=en-US`)
                    .then(function (response) {
                        setLoading(true)
                        setDatasDetails(response.data)
                        setLoading(false)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }, [id])

            return { datasDetails, loading }

        case 'TvDetails':
            useEffect(() => {
                axios.get(`${base_url}tv/${id}?api_key=${key}&language=en-US`)
                    .then(function (response) {
                        setLoading(true)
                        setDatasDetails(response.data)
                        setLoading(false)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }, [id])

            return { datasDetails, loading }
    }
}

export function getCreditsData(typeRequisition, id) {
    const [creditsDetails, setCreditsDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    switch (typeRequisition) {
        case "movies":
            useEffect(() => {
                axios.get(`${base_url}movie/${id}/credits?api_key=${key}&language=en-US`)
                    .then(function (response) {
                        setCreditsDetails(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
            }, [id])

            return { creditsDetails, loading };

        case "tv":
            useEffect(() => {
                axios.get(`${base_url}tv/${id}/credits?api_key=${key}&language=en-US`)
                    .then(function (response) {
                        setLoading(true)
                        setCreditsDetails(response.data);
                        setLoading(false)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }, [id])

            return { creditsDetails, loading };
    }
}

export function getImagesMovies(typeRequisition, id) {

    const [datasImages, setDatasImages] = useState([]);
    const [loading, setLoading] = useState(false);

    switch (typeRequisition) {
        case "Movies":
            useEffect(() => {
                axios.get(`${base_url}movie/${id}/images?api_key=${key}&language=en-US&include_image_language=en,null`)
                    .then(function (response) {
                        setLoading(true);
                        setDatasImages(response.data);
                        setLoading(false);
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }, [id])

            return { datasImages };

        case "Tv":
            useEffect(() => {
                axios.get(`${base_url}tv/${id}/images?api_key=${key}&language=en-US&include_image_language=en,null`)
                    .then(function (response) {
                        setLoading(true);
                        setDatasImages(response.data);
                        setLoading(false);
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }, [id])

            return { datasImages, loading };

    }
}

export function getTrailer(typeRequisition, id) {
    const [datasTrailer, setTrailer] = useState([]);
    const [loading, setLoading] = useState(false);

    switch (typeRequisition) {
        case "Movies":
            useEffect(() => {
                axios.get(`${base_url}movie/${id}/videos?api_key=${key}&language=en-US`)
                    .then(function (response) {
                        setLoading(true);
                        setTrailer(response.data);
                        setLoading(false);
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }, [id])

            return { datasTrailer, loading }

        case "Tv":
            useEffect(() => {
                axios.get(`${base_url}tv/${id}/videos?api_key=${key}&language=en-US`)
                    .then(function (response) {
                        setLoading(true);
                        setTrailer(response.data);
                        setLoading(false);
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }, [id])

            return { datasTrailer, loading }
    }
}

export function MoviesSimilar(typeRequisition, id) {
    const [datasSimilar, setDatasSimilar] = useState([]);
    const [loading, setLoading] = useState(false);

    switch (typeRequisition) {
        case "Movies":
            useEffect(() => {
                axios.get(`${base_url}movie/${id}/similar?api_key=${key}&language=en-US&page=1`)
                    .then(function (response) {
                        setLoading(true);
                        setDatasSimilar(response.data);
                        setLoading(false);
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }, [id])

            return { datasSimilar, loading }

        case "Tv":
            useEffect(() => {
                axios.get(`${base_url}tv/${id}/similar?api_key=${key}&language=en-US&page=1`)
                    .then(function (response) {
                        setLoading(true);
                        setDatasSimilar(response.data);
                        setLoading(false);
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }, [id])

            return { datasSimilar, loading }
    }
}
