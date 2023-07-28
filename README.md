# hotel-dashboard

> :red_square: Projet à forker et à utiliser comme base au développement de votre dashboard d'administration de l'hôtel.

## 1. Lancement du projet (15min)

Voilà les commandes à rentrer dans le terminal pour pouvoir récupérer le projet sur votre machine :

```bash
git clone https://github.com/AlbanCrepel/hotel-dashboard.git # clone du repo
cd hotel-dashboard # se placer dans son dossier
npm install # installation des dépendances
npm run dev # Compile + Hot-Reload pour le développement

npm run build # Compile + Minify pour la production
npm run preview # Aperçu du build de production
```



---

## 2. Changements sur l'API Laravel (30min)

Il faut que ce projet (client front-end) aille récupérer les données de votre API REST Laravel (back-end).

Laravel recommande d'utiliser des cookies tokens (https://laravel.com/docs/10.x/sanctum#spa-authentication), mais
cette solution marche sur votre API et votre front-end partagent le même host, ce qui pourrait ne pas être forcément le cas.

Nous allons donc utiliser des API tokens pour pouvoir authentifier les utilisateurs et opter pour un front-end totalement découplé de l'API Laravel.
En suivant l'exemple de la documentation (https://laravel.com/docs/10.x/sanctum#issuing-mobile-api-tokens), 
rajouter une route `POST` à votre API qui va venir récupérer un utilisateur grâce à son email et mot de passe passé en `body` de la requête :

```php
// `routes/api.php`:

use \App\Models\User;
use \Illuminate\Support\Facades\Hash;
use \Illuminate\Validation\ValidationException;

Route::post('/sanctum/token', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken("")->plainTextToken;
});
```

Si votre route est prête, vous pouvez vérifier qu'elle est bien listée dans toutes les routes de votre projet avec la commande `php artisan route:list`.

Vous pouvez tester son bon fonctionnement via un outil de test de requête comme Postman.

---

## 3. Tour du projet et des outils disponibles

// TODO

https://antdv.com/components/overview/

```
:style="{ color: $theme.colorPrimary }"

color: v-bind("$theme.colorPrimary");
```

```js
this.$notification.info({
    message: "My notification message"
})
```

## 4. Maquettage

// TODO


## 5. Développement et priorisation des tâches

// TODO
