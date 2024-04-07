import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel } from 'react-bootstrap';


class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('src\\assets\\data.json'); // Adjust the path
      const movieJSON = await response.json();

      this.setState({
        data: movieJSON,
        loading: false
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='row'>
        <div className='col-sm-1'></div>
        {data.map(movie => (
          <div className='col-sm-2'>
            <Card key={movie.id} movie={movie} />
          </div>
        ))}
        <div className='col-sm-1'></div>
      </div>
    );
  }
}


const Card = ({ movie }) => {
  return (
    <div className='card'>
      <img src={movie.img.src} alt={movie.img.alt} width="200" className='card-img-top'/>
      <div className='card-body'>
        <h2 className='card-title'>{`#${movie.ranking} - ${movie.title} - (${movie.year})`}</h2>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>{`Distributor: ${movie.distributor}`}</li>
          <li className='list-group-item'>{`Amount: ${movie.amount}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
        <div className='container-fluid sticky-top C'>
          <div className='row'>
            <div className='col-sm-6'>
              <h2>movieList</h2>
            </div>
            <div className='col-sm-3'></div>
            <div className='col-sm-3'>
              <form>
              <input type="text" placeholder='Any particular movie?' />
              <button className='btn'>Search</button>
              </form>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10'>
              <div className='carousel slide' id="Dad" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-slide-to="0" data-bs-target="#Dad" className="active"></button>
                  <button type="button" data-bs-slide-to="1" data-bs-target="#Dad"></button>
                  <button type="button" data-bs-slide-to="2" data-bs-target="#Dad"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src='src/media/1.jpg' className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src='src/media/2.jpg' className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src='src/media/3.jpg' className="d-block w-100" alt="Slide 3" />
                  </div>
                </div>
                <button type="button" data-bs-target="#Dad" data-bs-slide="next" className="carousel-control-next">
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <button type="button" data-bs-target="#Dad" data-bs-slide="prev" className="carousel-control-prev">
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
              </div>
              <div className='col-sm-1'></div>
            </div>
          </div>
        </div>
      <div className='container-fluid'>
        <List />
      </div>
      <div className='container-fluid'>
        <List />
      </div>
      <div className='container-fluid'>
        <List />
      </div>
      <div className='container-fluid'>
        <List />
      </div>
      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-4'>
              <h1>About us:</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio saepe, aut quis sit consectetur, aspernatur tempora culpa suscipit dolorum accusamus facilis quod minima in impedit obcaecati labore repellendus maxime!</p>
            </div>
            <div className='col-sm-4'>
              <h1>Contact Us:</h1>
              <p>number : +905346853091</p>
            </div>
            <div className='col-sm-4'>
              <h1>Social Media</h1>
              <p>Instagram : Seyid MK</p>
              <p>Github : SeyidMK</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
