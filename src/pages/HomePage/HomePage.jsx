import SectionContainer from "../../components/Container/SectionContainer"
import './HomepageHeader.css'


const Homepage = () => {
    return (
        <>
            <SectionContainer className="container d-flex flex-row justify-content-center align-items-center my-5">
                <HomepageHeader />
            </SectionContainer>
        </>
    )
}

const HomepageHeader = () => {
    return (
        <div className="homepage-header d-flex flex-column justify-content-center align-items-center">
            <img className="homepage-header__image" src="assets/search.png" alt="" />
            <p className="homepage-header__heading fs-1">Search for your favorite drink recipes</p>
        </div>
    )
}

export default Homepage