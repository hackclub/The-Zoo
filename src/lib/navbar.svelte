<style>
    #navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 105px;
        z-index: 1000;
        background-color: rgba(40, 143, 40, 0.955);
        transition: background-color 0.3s ease-in-out, height 0.5s ease-in-out, border-bottom-right-radius 0.5s ease-in-out, border-bottom-left-radius 0.5s ease-in-out;
    }

    #logo {
        margin: 0 auto;
        display: block;
        width: 250px;
        height: auto;
        margin-top: 10px;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        cursor: pointer;
        transition: opacity 0.6s ease-in-out !important;
    }

    .navbutton {
        margin-top: 105px;
        margin-left: 5px;
        margin-right: 5px;
        border: none;
        font-family: Montserrat, Space Mono;
        font-weight: 700;
        color: white;
        background-color: rgb(2, 63, 2);
        font-size: 20px;

        opacity: 0;
        visibility: collapse;
        transition: opacity 0.5s ease-in-out;
    }
    .navbutton:hover {
        background-color: rgb(7, 180, 7)
    }

    @media (max-width: 750px) {
        #navbar {
            height: 70px;
        }

        #logo {
            width: 150px;
        }
    }

    @media (min-width: 750px) {
        #navbar #logo {
            position: absolute;
            left: 0;
            right: 0;
            transition: right 1s ease-in-out;
        }
    }

    @media (min-width: 750px) {
         #navbar:hover {
            background-color: rgb(40, 143, 40);
            height: 170px;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;

            .navbutton {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    #spacing {
        height: 105px;
    }

    @media (max-width: 700px) {
        #spacing {
            height: 70px;
        }
    }
</style>

<div id="navbar">
    <a href= "./"><img id = "logo" src="logo.png" alt="Logo"/></a>
    <button class="navbutton" onclick = { window.location.href = "/mynts" }>MYNTS</button>
    <button class="navbutton" onclick = { window.location.href = "/requirements" }>REQUIREMENTS</button>
    <button class="navbutton" onclick = { window.location.href = "/alternative" }>SHIPPING</button>
</div>
<div id="spacing"></div>