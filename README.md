
## pense bête
 - lancer le serveur : 
 - 
```shell
  symfony serve
 ```
 - se placer dans le dossier assets pour lancer ensuite le serveur webpack : 
 - 
```shell
cd assets &&  npm run dev-server
```
  
Ouvrir le navigateur sur l'url du serveur symfony et travailler sur VueJS le sevrer webpack est lancé sur le port 8080
il fera l'autorefresh des pages et des composants VueJS

Ensuite il faudra refaire un build pour que les fichiers soient mis à jour dans le dossier public si besoin de mettere en prod ou de tester sur le serveur symfony en local sans le serveur webpack qui tourne en parallèle

```shell
npm run build
```

## Doc

![Template et composants](./doc/template.jpg).


## Déjà installé et prêt à l'emploi

- inititalisation skeleton
```
symfony new myProject
```

- installation debug bar
```
composer req --dev debug
```

- installation de extra-bundle pour gérer les annotations
```
composer require sensio/framework-extra-bundle
```

- installer doctrine et le maker bundle
```
composer require symfony/orm-pack
```
```
composer require --dev symfony/maker-bundle
```

- configurer Doctrine pour Mamp en local dans le fichier config/packages/doctrine.yaml

```yaml
doctrine:
    dbal:
        # ajouter ça pour la config mamp (peut être supprimé en prod)
        unix_socket: /Applications/MAMP/tmp/mysql/mysql.sock
        # garder juste ça en prod
        url: '%env(resolve:DATABASE_URL)%'
```

- créer un fichier .env.local et configurer la BDD MariaDB ou Sql
```
DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=mariadb-10.5.8"
```
```
DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7"
```
- créer la BDD
```
bin/console doctrine:database:create
```
- installer le fixture Bundle Doctrine
```
composer require --dev orm-fixtures
```
- installer Faker pour améliorer les fixture
- https://fakerphp.github.io/
```
composer require --dev fakerphp/faker
```
- installer Stof Doctrine Extension bundle pour automatiser la création de date, slugs directement dans les annotation sur les propriétés des Entités
- https://symfony.com/bundles/StofDoctrineExtensionsBundle/current/index.html
- https://github.com/doctrine-extensions/DoctrineExtensions/tree/main/doc
```
composer require stof/doctrine-extensions-bundle
```

- gérer les Assets (hors webpack)
```
composer require symfony/asset
```

- Installer le serializer pour gérer les données en json
```
composer require symfony/serializer
```

# A faire et installer au besoin pour poursuivre


- installer le securityBudle pour gérer l'authentification
```
composer require symfony/security-bundle
```
- installer la validation pour utiliser les Assert eg : unique ou NotBlank... sur les propriétés des Entités
- ajouter le use : use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
- et sur la propriét: @ORM\Column(type="string", length=50, unique=true)
- Regarder dans l'Entity User si besoin...
```
composer require symfony/validator
```

- Creer un user
- https://symfony.com/doc/5.4/security.html
```
bin/console make:user
```
```
bin/console make:migration
```
```
bin/console doctrine:migrations:migrate
```
  
- Gérer l'authentification et créer le controller + le LogInform + l'authenticator
```
bin/console make:auth
```
- Installer la vérification du mail
```
composer require symfonycasts/verify-email-bundle
```
- Installer la génération de formulaire 
```
composer require form
```

- Créer le form d'enregistrement du User
```
bin/console make:registration-form
```
- Installer Mailer pour gérer la confirmation par mail et l'envoie de mail
```
composer require symfony/mailer
```
- Mettre à jour le .env.local avec une config MailTrap pour test en dev
  
```
###> symfony/mailer ###
MAILER_DSN=null://placer le lien de config mailtrap ici
###< symfony/mailer ###
```  

- Twig bindle
- https://symfony.com/doc/5.4/reference/configuration/twig.html
```
composer require symfony/twig-bundle
```


## compléments
- vérifier les dépendances compromises :
```
symfony check:security
```