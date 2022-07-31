import axios from "axios";
import { useEffect, useState } from "react";

export const key = 'ce87f3188394e1833369a82d69bf9164';
export const base_url = 'https://api.themoviedb.org/3/';


export function getTrendings(mediaType, Time) {
    const [datasTrending, setDatasTrending] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${base_url}trending/${mediaType}/${Time}?api_key=${key}&language=pt-BR`)
            .then(function (response) {
                setDatasTrending(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return { datasTrending, loading }
}


export function getDatasApi(typeRequisition, page) {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${base_url}${typeRequisition}/top_rated?api_key=${key}&language=pt-BR&page=${page}`)
            .then(function (response) {
                setDatas(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [page])

    return { datas, loading }
}

export function getDataDetailsApi(typeRequisition, id) {
    const [datasDetails, setDatasDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${base_url}${typeRequisition}/${id}?api_key=${key}&language=pt-BR`)
            .then(function (response) {
                setDatasDetails(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [id])

    return { datasDetails, loading }
}

export function getCreditsData(typeRequisition, id) {
    const [creditsDetails, setCreditsDetails] = useState([]);

    useEffect(() => {
        axios.get(`${base_url}${typeRequisition}/${id}/credits?api_key=${key}&language=pt-BR`)
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

    return { creditsDetails };
}

export function getImagesMovies(typeRequisition, id) {
    const [datasImages, setDatasImages] = useState([]);

    useEffect(() => {
        axios.get(`${base_url}${typeRequisition}/${id}/images?api_key=${key}&language=pt-BR&include_image_language=en,null`)
            .then(function (response) {
                setDatasImages(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [id])

    return { datasImages };
}

export function getTrailer(typeRequisition, id) {
    const [datasTrailer, setTrailer] = useState([]);

    useEffect(() => {
        axios.get(`${base_url}${typeRequisition}/${id}/videos?api_key=${key}&language=pt-BR`)
            .then(function (response) {
                setTrailer(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [id])

    return { datasTrailer }
}

export function MoviesSimilar(typeRequisition, id) {
    const [datasSimilar, setDatasSimilar] = useState([]);

    useEffect(() => {
        axios.get(`${base_url}${typeRequisition}/${id}/similar?api_key=${key}&language=pt-BR&page=1`)
            .then(function (response) {
                setDatasSimilar(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [id])

    return { datasSimilar }

}

export function getSearch(typeRequisition, query, page) {
    const [dataSearch, setDatasSearch] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${base_url}search/${typeRequisition}?api_key=${key}&language=pt-BR&page=${page}&include_adult=false&query=${query}`)
            .then(function (response) {
                setDatasSearch(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [query, page])

    return { dataSearch, loading }
}