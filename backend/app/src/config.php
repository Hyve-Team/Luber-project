<?php

class config
{
    protected $dbhost = 'localhost';
    protected $dbuser = 'root';
    protected $dbpass = 'zAn6xfh123zan6xfh.';
    protected $dbname = 'luber';

    public function connect()
    {
        $dsn = 'mysql:host='.$this->dbhost.';dbname='.$this->dbname.'';
        $pdo = new PDO($dsn, $this->dbuser, $this->dbpass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $pdo;
    }

    public function getQuery($query, $param = null)
    {
        try {
            $pdo = $this->connect();
            $stmt = $pdo->prepare($query);
            $stmt->execute($param);
            $count = $stmt->rowCount();
            if ($count > 1) {
                return $stmt->fetchAll(PDO::FETCH_OBJ);
            } else {
                return false;
            }
        } catch (PDOException $e) {
            echo '{"error": {"text": '.$e->getMessage().'}';
        }
    }

    public function postQuery($query, $param = null, $msg)
    {
        try {
            $pdo = $this->connect();
            $stmt = $pdo->prepare($query);
            $stmt->execute($param);
            echo '{"success": {"text": '.$msg.'}';
            $pdo = null;
        } catch (PDOException $e) {
            echo '{"error": {"text": '.$e->getMessage().'}';
        }
    }

    public function checkUsername($username)
    {
        $pdo = $this->connect();
        $statement = $pdo->prepare('SELECT username FROM users WHERE username = :username');
        $statement->bindParam(':username', $username, PDO::PARAM_STR);
        $statement->execute();

        $count = $statement->rowCount();
        if ($count > 0) {
            exit('Username already in use');
        } else {
            return false;
        }
    }

    public function checkEmail($email)
    {
        $pdo = $this->connect();
        $stmt = $pdo->prepare('SELECT email from users WHERE email = :email');
        $stmt->execute(['email' => $email]);
        $count = $stmt->rowCount();
        if ($count > 0) {
            exit('Email in use');
        } else {
            return false;
        }
    }
}
