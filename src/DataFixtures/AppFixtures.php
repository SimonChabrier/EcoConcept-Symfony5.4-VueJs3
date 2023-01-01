<?php

namespace App\DataFixtures;

// Add the use for Entity you want to create
// use App\Entity\User;

use Faker\Factory as Faker;
use Doctrine\DBAL\Connection;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{   
    private $connexion;

    public function __construct(Connection $connexion)
    {
        $this->connexion = $connexion;
    }

    /**
     * Truncate tables as needed
     *
     * @return void
     */
    private function truncate ()
    {
        // Disable foreign key checks to truncate tables
        $this->connexion->executeQuery('SET foreign_key_checks = 0');
        // list the tables you want to truncate here
        $this->connexion->executeQuery('TRUNCATE TABLE `user`');
        // $this->connexion->executeQuery('TRUNCATE TABLE `X`');
        // $this->connexion->executeQuery('TRUNCATE TABLE `Y`');
        // $this->connexion->executeQuery('TRUNCATE TABLE `Z`');
    }

    public function load(ObjectManager $manager): void
    {   
        // 1 - Truncate tables

        $this->truncate();

        // 2 - Call faker in french

        // $faker = Faker::create('fr_FR');

        // 3 -Start to create users

        // $admin = new User();
        // $admin->setUsername('admin');
        // $admin->setEmail('admin@admin.fr');
        // $admin->setPassword(password_hash('password', PASSWORD_BCRYPT));
        // $admin->setRoles(['ROLE_ADMIN']);

        // $manager->persist($admin);

        // $users = [];

        // for ($i = 0; $i < 10; $i++) {
        //     $user = new User();
        //     $user->setUsername($faker->userName);
        //     $user->setEmail('user' . $i . '@user.fr');
        //     $user->setPassword(password_hash('password', PASSWORD_BCRYPT));
            
        //     $user->setRoles(['ROLE_USER']);

        //     $users[] = $user;

        //     $manager->persist($user);
        // };

        // $manager->flush();
    }
}
