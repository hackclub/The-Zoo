<script>
    import { onMount } from "svelte";
    onMount(function() {
        setTimeout(function(){document.getElementById("navbar").classList.remove("active");}, 200);
    })
</script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_drop_down_circle,assured_workload,docs,groups,home,list_alt_check,lock_person,package,pets,poker_chip" />
<style>
    #navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 105px;
        z-index: 1000;
        overflow: hidden;
        background-color: rgba(40, 143, 40, 0.955);
        transition: background-color 0.3s ease-in-out, height 0.5s ease-in-out, border-bottom-right-radius 0.5s ease-in-out, border-bottom-left-radius 0.5s ease-in-out;
    }

    #logo {
        position: absolute;
        top: 10px;
        width: 250px;
        height: auto;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        cursor: pointer;
        left: 50%;
        transform: translateX(-50%); 
        transition: top 0.8s ease-in-out;
    }

    #buttons {
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        transition: top 0.8s ease-in-out;
        top: 120px;
    }

    .navbutton {
        margin-left: 5px;
        margin-right: 5px;
        border: none;
        font-family: Montserrat, Space Mono;
        font-weight: 700;
        color: white;
        background-color: rgb(2, 63, 2);
        font-size: 20px;
    }
    .navbutton:hover {
        background-color: rgb(34, 99, 34);
    }

    #spacing {
        height: 105px;
    }

    @media (max-width: 750px) {
        #navbar {
            height: 70px;
        }
        #logo {
            width: 160px;
        }
        #spacing {
            height: 70px;
        }
    }

    #navbar:hover {
        #logo {
            top: -150px;
        }
        #buttons {
            top: 30px;
        }
    }

    #navbar.active {
        #logo {
            top: -150px;
        }
        #buttons {
            top: 30px;
        }
    }
</style>

<nav id="navbar" class="active">
    <a href= "./"><img id = "logo" src="logo.png" alt="Logo"/></a>
    <div id="buttons">
        <button translate = "no" class="navbutton" title="Home" onclick = { window.location.href = "/" }><span class="material-symbols-outlined">home</span></button>
        <button translate = "no" class="navbutton" title="Mynts" onclick = { window.location.href = "/mynts" }><span class="material-symbols-outlined">poker_chip</span></button>
        <button translate = "no" class="navbutton" title="Requirements" onclick = { window.location.href = "/requirements" }><span class="material-symbols-outlined">docs</span></button>
        <button translate = "no" class="navbutton" title="Shipping" onclick = { window.location.href = "/alternative" }><span class="material-symbols-outlined">package</span></button>
        <button translate = "no" class="navbutton" title="Clubs" onclick = { window.location.href = "/clubs" }><span class="material-symbols-outlined">groups</span></button>
    </div>
</nav>
<div id="spacing"></div>