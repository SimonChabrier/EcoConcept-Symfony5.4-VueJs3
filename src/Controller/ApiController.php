<?php

namespace App\Controller;

use App\Repository\PostRepository;
use App\Entity\Post;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
    /**
     * Retourne tous les Posts
     * @Route("/api/posts", name="posts.api", methods={"GET"})
     */
    public function getPosts(PostRepository $postRepository): Response
    {
        return $this->json([
            'posts' => $postRepository->findAll(),
        ]);
    }

    /**
     * Retourne un Post
     * @Route("/api/posts/{id}", name="post.api", methods={"GET"})
     */
    public function getPost(Post $post): Response
    {
        return $this->json([
            'post' => $post,
            Response::HTTP_OK,
            [],
            ['groups' => 'post:read']
        ]);
    }

    /**
     * Créer un nouveau Post
     * @Route("/api/posts", name="post.create", methods={"POST"})
     */
    public function createPost(
        EntityManagerInterface $doctrine,
        Request $request,
        SerializerInterface $serializer,
        ValidatorInterface $validator
    ): Response
    {   
        $post = $serializer->deserialize($request->getContent(), Post::class, 'json');
        $errors = $validator->validate($post);
        if (count($errors) > 0) {
            return $this->json($errors, 400);
        }
        $doctrine->persist($post);
        $doctrine->flush();

        return $this->json(
            ['message' => 'Post created'],
            Response::HTTP_OK,
            [],
            ['groups' => 'post:read']
            
        );
    }


    /**
     * Mettre à jour un Post
     * @Route("/api/posts/{id}", name="api.patch.post", methods={"PATCH"})
     */
    public function patchUser(
        Post $post,
        EntityManagerInterface $doctrine,
        Request $request,
        SerializerInterface $serializer,
        ValidatorInterface $validator
    ): Response
    {   
        $data = $request->getContent();
        $serializer->deserialize($data, Post::class, 'json', ['object_to_populate' => $post]);
        $errors = $validator->validate($post);
        
        if (count($errors) > 0) {
            return $this->json($errors, 400);
        }

        // save the user in the database
        $doctrine->persist($post);
        $doctrine->flush();
    
        return $this->json(
            ['message' => 'Post updated'],
            Response::HTTP_OK,
            [],
            ['groups' => 'post:read']
        );
    }

    /**
     * Supprimer un Post
     * @Route("/api/posts/{id}", name="api.delete.post", methods={"DELETE"})
     */
    public function deleteUser(
        Post $post,
        EntityManagerInterface $doctrine
    ): Response
    {   
        $doctrine->remove($post);
        $doctrine->flush();

        return $this->json(
            ['message' => 'Post deleted'],
            Response::HTTP_OK,
            [],
            ['groups' => 'post:read']
        );
    }


}
