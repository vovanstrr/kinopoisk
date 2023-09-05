import './Film.css'
import './persons/Persons'
import Persons from './persons/Persons';

function Film({ FilmData }) {
    console.log('FilmData1', FilmData);
    // console.log('poster', FilmData.poster.previewUrl);
    // console.log('data world', FilmData.premiere.world.substring(0, 10));
    // console.log('data russian', FilmData.premiere.russia.substring(0, 10));

    return (
        <div>
            <p>{FilmData.name}</p>
            <div className='descript'>
                <p className='text'>{FilmData.description}</p>
                <div className='premiere'>


                    {FilmData.premiere.world ? <p>Примьера в мире: {FilmData.premiere.world.substring(8, 10) + '.' + FilmData.premiere.world.substring(5, 7) + '.' + FilmData.premiere.world.substring(0, 4)}</p>
                        : <p>Примьера в мире:</p>}
                    {FilmData.premiere.russia ? <p>Примьера в России: {FilmData.premiere.russia.substring(8, 10) + '.' + FilmData.premiere.russia.substring(5, 7) + '.' + FilmData.premiere.russia.substring(0, 4)}</p>
                        : <p>Примьера в России:</p>}
                </div>
                <img src={FilmData.poster.previewUrl} alt='poster' className='image' />

            </div>
            <div className='persons'>
                {FilmData.persons.map((pers, index) =>
                    <Persons pers={pers} />
                )}
            </div>

        </div>
    )
}

export default Film