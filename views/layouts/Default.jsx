const React = require('react');
class DefaultLayout extends React.Component {
    render() {
        return (
            <>
                <html>
                    <head>
                        <link type="text/css" rel="stylesheet" href="/styles/main.css"></link>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>

                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
                        <title class='title'>{this.props.title}</title>
                    </head>
                    <body>


                        <nav class="navbar navbar-expand-lg bg-light">
                            <div class="container-fluid">
                                <button class="brand-btn">
                                    <a class="navbar-brand" href="/">Inventory</a>
                                </button>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class=" navbar-nav me-auto mb-2 ms-5 mb-lg-0">
                                        <li class="nav-item ms-5">
                                            <button class="nav-btn">
                                                <a class="nav-link active" aria-current="page" href="/fridge">Fridge</a>
                                            </button>
                                        </li>
                                        <li class="nav-item ms-3">
                                            <button class="nav-btn">
                                                <a class="nav-link active" aria-current="page" href="/beverage">Beverages</a>
                                            </button>
                                        </li>
                                        <li class="nav-item ms-3 me-5">
                                            <button class="nav-btn">
                                                <a class="nav-link active" aria-current="page" href="/snack">Snacks</a>
                                            </button>
                                        </li>
                                        <li class="nav-item ms-5">
                                            <a class="nav-link active" aria-current="page" href="#">Login</a>
                                        </li>
                                        <div class="dot"></div>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <h1>{this.props.title}</h1>
                        {this.props.children}
                    </body>
                </html>
            </>
        )
    }
}

module.exports = DefaultLayout;