const React = require("react");
const DefaultLayout = require("./layouts/default");
class Home extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div>
                    <h1 class="title"> Welcome to Your Inventory App</h1>
                </div>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={"https://media.istockphoto.com/photos/refrigerator-with-fruits-and-vegetables-picture-id842160124?k=20&m=842160124&s=612x612&w=0&h=GrjPQBB3DRGLEtm1Oa0gcTpMOhdOpXGgECnLB8qVnJg="} alt={"fridge"} class="home-img d-block w-100" />
                            <div class="carousel-caption d-none d-md-block">
                                <button class="home-btn" > <a href="/fridge"> FOOD</a></button>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="20000" >
                            <img src={"https://static01.nyt.com/images/2022/01/20/fashion/20SKIN-BEAUTYDRINKS1/20SKIN-BEAUTYDRINKS1-videoSixteenByNine3000.jpg"} alt={"beverages"} class="home-img d-block w-100 " />
                            <div class="carousel-caption d-none d-md-block">
                                <button class="home-btn" > <a href="/beverage"> BEVERAGES</a></button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={"https://media.istockphoto.com/photos/mixed-salty-snack-flat-lay-table-scene-on-a-wood-background-picture-id1263686908?k=20&m=1263686908&s=612x612&w=0&h=t-mKx8bDm0xd-rocJ6ec1bzOOSM1STKkypTirjDWnCg="} alt={"snack"} class="d-block w-100" />
                            <div class="carousel-caption d-none d-md-block">
                                <button class="home-btn" > <a href="/snack"> SNACKS</a></button>
                            </div>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Home;