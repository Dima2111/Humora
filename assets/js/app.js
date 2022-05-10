// Component entete
let Tete = {
    data() {
        return {
            title: "Humora, Laissez Moi Faire",
            mots_cle: "musique, humeur, fonction intelligente, intelligence artificielle, musique d'esprit, science, joie, tristesse, contentresse, amertume, courage, foi, espoir, etc.",
            desc: "Dites moi comment vous vous sentez aujourd'hui, je me charge de vous trouver ce qu'il  vous faut!"
        }
    },
    template: `
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{title}}</title>
        <meta name="keywords" :content="mots_cle">
        <meta name="description" :content="desc">

        <link rel="stylesheet" href="../../assets/css/style.css">

    
    </head>
    
    `
}

// Component barre de navigation
let SideBar = {
    data() {
        return {
            menu: [
                {title: "Accueil", link: "../../index.html" }, 
                {title: "Store", link: "../../pages/store.html" }, 
                {title: "Memory", link: "../../pages//memory.html" }, 
                {title: "A-propos", link: "../../pages/about.html" }, 
            ]
        }
    },
    template: `
    
    <div class="aside">
        <div class="logo">
            <a href="#">I <span>Humora</span></a>
        </div>
        <ul class="nav">
            <li><a href="#" class="active"><i class="fa fa-home"></i> Accueil</a></li>
            <li><a href="#"><i class="fa fa-home"></i> Accueil</a></li>
            <li><a href="#"><i class="fa fa-home"></i> Accueil</a></li>
            <li><a href="#"><i class="fa fa-home"></i> Accueil</a></li>
            <li><a href="#"><i class="fa fa-home"></i> Accueil</a></li>
        </ul>
    </div>

    `
}

// Widget emotion
let Widget = new Vue({
    el: "#mainA",
    data() {
        return {
            emotions:[
                {nom: "Langue", status: false, img: "../../../assets/imgs/1.jpg"},
                {nom: "D'accord", status: false, img: "../../../assets/imgs/2.jpg"},
                {nom: "Optimiste", status: false, img: "../../../assets/imgs/3.jpg"},

            ],
            new_emotion: "",
            new_img: "",
            help: "Ajouter une emotion",
            image: "",
        }
    },

    methods: {
        
        ajouterEmotion () {
            this.emotions.push({
                status: false,
                nom: this.new_emotion,
                img: this.image
            })
            this.new_emotion = ""
        },

        deleteEmotion (emo){
            this.emotions = this.emotions.filter( (i) => i !== emo)
        },

        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
              return;
            this.createImage(files[0]);
          },

        createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
    
        reader.onload = (e) => {
            vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
        },

        
    },
    computed: {
        reste() {
            a = this.emotions.filter((emotion) => emotion.status == false)
            return Object.keys(this.emotions).length
        },

    }
})



// Vues



let AppGeneral = new Vue({
    el: "#app",
    data() {
        return {
            
        }
    },
    methods: {
        
    },

    computed: {
        
    },

    components: {Tete, SideBar},
})



let SideMenu = new Vue({
    el: "#menu",
    data() {
        return {
            menus: [
                {title: "Accueil", link: "../../index.html" }, 
                {title: "Store", link: "../../pages/store.html" }, 
                {title: "Memory", link: "../../pages//memory.html" }, 
                {title: "A-propos", link: "../../pages/about.html" }, 
            ],
        }
    },
})