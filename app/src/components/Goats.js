import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchGoats} from '../store'

const Goats = (props) => {
    useEffect( () => {
        props.fetchGoats()
    }, [])

    return(
        <div>
            <h1>Foxes</h1>
            {props.isLoading ? <h3>Cute Foxes Are Loading. . .</h3> : null }
            {props.error ? (<div><h3>Error!</h3><p>{props.error}</p></div>) : null }

            <div>
            {props.photo.length > 0 ? (
                <img src={props.photo} alt='fox' />
            ) : null}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        photo: state.photo,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchGoats})(Goats)