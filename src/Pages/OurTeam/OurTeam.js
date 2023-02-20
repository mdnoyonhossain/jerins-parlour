import React from 'react';
import team1 from '../../assets/images/team3.jfif'
import team2 from '../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
import team3 from '../../assets/images/team4.avif'
import useTitle from '../../hooks/useTitle';

const OurTeam = () => {
    useTitle('Our Team');

    return (
        <section className='py-5 py-4' style={{ background: '#FFF8F5' }}>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={team1} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Jesen Dapel</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={team2} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">jeo Parker</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={team3} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Newl Dipker</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;