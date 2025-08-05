<style>
    #ysws {
        position: relative;
        text-align: center;
        width: 100%;
        height: 300px;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-x: hidden;
        overflow-y: hidden;

        margin-bottom: 0;
    }
    @media (min-width: 750px) {
        #ysws {
            height: 150px;
        }
    }
    @media (max-width: 750px) {
        #ysws {
            height: 130px;
        }
        h1 {
            font-size: 20px !important;
        }
    }

    h1 {
        font-size: 40px;
    }

    #banner1 {
        position: absolute;
        background-color: rgb(37, 68, 37);
        width: 100%;
    }
    #banner2 {
        position: absolute;
        width: 100%;
        background-color: rgb(70, 104, 70);
        animation: slideYSWS 15s infinite ease-in-out;
    }
    @keyframes slideYSWS {
        0% {
            transform: translateX(100vw);
            opacity: 0;
        }
        28% {
            transform: translateX(100vw);
            opacity: 0;
        }
        29% {
            transform: translateX(100vw);
            opacity: 100;
        }
        30% {
            transform: translateX(100vw);
        }
        40% {
            transform: translateX(0);
        }
        75% {
            transform: translateX(0);
        }
        85% {
            transform: translateX(-100vw);
            opacity: 100;
        }
        86% {
            transform: translateX(-100vw);
            opacity: 0;
        }
        87% {
           transform: translateX(100vw);
        }
        100% {
            transform: translateX(100vw);
            opacity: 0;
        }
    }

</style>

<div id="ysws">
    <div id="banner1">
        <br><br>
        <h2>You ship</h2>
        <h1>A SVELTE SITE</h1>
        <br><br>
    </div>
    <div id="banner2">
        <br><br>
        <h2>We ship</h2>
        <h1>AN IKEA ANIMAL PLUSHIE</h1>
        <br><br>
    </div>
</div>
