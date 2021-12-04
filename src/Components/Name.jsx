import React from 'react'

const Name = ({movieData}) => {

    return (
        <>
            <div className="name text-light text-center">
                    <h1>List of Movies</h1>
                    <div className="border nameContainer mt-3 p-3">
                        {
                            movieData.map((element)=>{
                                        return <h3 key={element.data.title}> {element.data.title}</h3>
                            })
                        }
                    </div>
            </div>
        </>
    )
}

export default Name
