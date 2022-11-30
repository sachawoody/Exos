class Personnage {
    constructor(pseudo, classe, sante, attaque) {
        this.pseudo = pseudo
        this.classe = classe
        this.sante = sante
        this.attaque = attaque
        this.niveau = 1

        this.evoluer = () => {
            this.niveau++
            console.log (`${this.pseudo} passe au niveau ${this.niveau} !`)
        }

        this.verifierSante = () => {
            if (this.sante <= 0) {
                this.sante = 0
                console.log(`${this.pseudo} a perdu!`)
            }
        }

    }
    get informations() {
        console.log (`${this.pseudo} ${this.classe} a ${this.sante} points de vie et est au niveau ${this.niveau}.`)
    }
}



class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo);
        this.classe = "magicien";
        this.sante = 170;
        this.attaque = 90;
    }
    attaquer(personnage) {
        personnage.sante -= this.attaque
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son épée (${this.attaque} dégâts).`)
        this.evoluer()
        personnage.verifierSante()
    }
    coupSpecial(personnage) {
        personnage.sante -= (this.attaque) * 5
        console.log(`${this.pseudo} attaque avec son coup spécial haches de guerre ${personnage.pseudo} (${(this.attaque) * 5} dégâts).`)
        this.evoluer()
        personnage.verifierSante()
    }

}


class Guerrier extends Personnage {
    constructor(pseudo) {
        super(pseudo)
        this.classe = "guerrier"
        this.sante = 350
        this.attaque = 50
    }
    attaquer(personnage) {
        personnage.sante -= this.attaque
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son épée (${this.attaque} dégâts).`)
        this.evoluer()
        personnage.verifierSante()
    }
    coupSpecial(personnage) {
        personnage.sante -= (this.attaque) * 5
        console.log(`${this.pseudo} attaque avec son coup spécial haches de guerre ${personnage.pseudo} (${(this.attaque) * 5} dégâts).`)
        this.evoluer()
        personnage.verifierSante()
    }

}

let aragorn = new Guerrier("Aragorn")
let gandalf = new Magicien("Gandalf")


aragorn.informations
gandalf.informations

gandalf.attaquer(aragorn);
gandalf.informations
aragorn.informations

aragorn.attaquer(gandalf);
aragorn.informations
gandalf.informations

gandalf.coupSpecial(aragorn);
gandalf.informations
aragorn.informations
