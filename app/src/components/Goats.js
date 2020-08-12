import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchGoats } from '../store'
import styled from 'styled-components'

const StyledTitle = styled.div`
font-family: 'Libre Baskerville', serif;
margin: 5% auto;
background-color:#f8f1d4;
color:#fe2d36;
max-width:50%;
max-height:50%;
padding:2.5%;
border-radius:10px;
border:5px solid #f19645;
`
const StyledQuote = styled.div`
display:flex;
justify-content:flex-start;
margin:2.5%;
color:black;
`

const StyledAuthor = styled.div`
display:flex;
justify-content:flex-end;
color:#fe2d36;
`

const StyledImage = styled.img`
max-width:50%;
height:auto;
border-radius:50%;
margin:5%;
`

const Goats = (props) => {
    useEffect(() => {
        props.fetchGoats()
    }, [])



    return (
        <div>
        <StyledTitle>
            <h1>Foxes</h1>
            {props.isLoading ? <h3>Cute Foxes Are Loading. . .</h3> : null}
            {props.error ? (<div><h3>Error!</h3><p>{props.error}</p></div>) : null}

            <div>
                {props.photo.length > 0 ? (
                    <StyledImage src={props.photo} alt='fox' />
                ) : null}
            </div>
            </StyledTitle>
            <StyledTitle>
                <StyledQuote>
                “Men have forgotten this truth,” said the fox. “But you must not forget it. You become responsible, forever, for what you have tamed.” </StyledQuote>
                <StyledAuthor> - Antoine de Saint Exupery</StyledAuthor>
            </StyledTitle>

    
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        photo: state.photo,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchGoats })(Goats)