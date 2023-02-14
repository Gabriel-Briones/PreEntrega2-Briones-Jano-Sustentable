import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { consultarBDD } from "../../utils/funciones.js"

import { ItemList } from '../ItemList/ItemList.jsx'
import { CategoriasProductos } from "../CategoriasProductos/CategoriasProductos"

export const ItemListContainer = () => {
    const { idCategoria } = useParams(null)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        console.log(idCategoria)

        if (idCategoria) {

            const categoria = CategoriasProductos.find(cat => cat.nombreCat === idCategoria)
            const catSeleccionada = categoria ? categoria.NumeroCategoria : null
            console.log(categoria)
            console.log(catSeleccionada)

            consultarBDD('../json/productos.json').then(products => {
                const prods = products.filter(prod => prod.idCategoria === catSeleccionada )
                const items = ItemList({ prods })
                setProductos(items)
            })
        } else {
            consultarBDD('./json/productos.json').then(prods => {
                const items = ItemList({ prods })
                setProductos(items)
            })
        }
    }, [idCategoria])

    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    )
}