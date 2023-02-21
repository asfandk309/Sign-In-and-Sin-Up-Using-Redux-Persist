import './Card.css'
function Card({ user }) {

    const date = new Date(user.created_at);

    return (

        <div className="card-container">
            <header className="card-header">
                <img src={user.avatar_url} className="card-img" />
                <div>
                    <h3> 
                    <a href={`https://github.com/${user.login}`}>  
                        {user.name} 
                    </a>
                    </h3>
                    <h4 className="login-style">
                    @{user.login}
                    </h4>
                    <p className='date-style'>joined
                        {` ${date.getDate()} ${date.toLocaleString("en-us", {
                            month: "short",
                        })} ${date.getFullYear()}`}
                    </p>

                </div>
            </header>

            <div className='bio-info'>
                <h6>{user.bio ? user.bio : "This profile has no bio"}</h6>
            </div>

            <table className='table'>
                <tbody className='table-body'>
                    <tr>
                        <th>Repos</th>
                        <th>Followers</th>
                        <th>Following</th>
                    </tr>
                    <tr>
                        <th>{user.public_repos}</th>
                        <th>{user.followers}</th>
                        <th>{user.following}</th>
                    </tr>
                </tbody>
            </table>

            <div className="contact-container">
                <div className='row row-style'>
                    <div className='col-6 contact-col'>
                        <img src="./images/icon-location.svg" alt="" />
                        <h6 className='location-style'>{user.location ? user.location : "Not Available"}</h6>
                    </div>
                    <div className='col-6 contact-col'>
                        <img src="./images/icon-website.svg" alt="" />
                        <h6>
                            <a href={user.blog}>{user.blog ? user.blog : "Not Available"}</a>
                        </h6>
                    </div>
                </div>
                <div className='row row-style'>
                    <div className='col-6 contact-col'>
                        <img src="./images/icon-twitter.svg" alt="" />
                        <h6>{user.twitter_username ? user.twitter_username : "Not Available"}</h6>
                    </div>
                    <div className='col-6 contact-col'>
                        <img src="./images/icon-company.svg" alt="" />
                        <h6>{user.company ? user.company : "Not Available"}</h6>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Card;


