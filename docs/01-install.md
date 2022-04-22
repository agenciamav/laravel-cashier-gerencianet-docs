---
title: "Instalação e configuração"
description: ""
tags: []
image: ""
date: 2019-09-17
---

# Instalação e configuração

## Instalação

Para começar, instale o pacote via composer:

```shell
composer require agenciamav/laravel-cashier-gerencianet
```

## Configuração


### Modelo faturável

Antes de utilizar, adicione o trait `Billable` ao model que representa um cliente faturável.
Este trait proverá vários métodos para gerenciar a assinatura do cliente.

```php
    use AgenciaMav\LaravelCashierGerencianet\Traits\Billable;

    class User extends Authenticatable
    {
        use Billable;
    }
```

Por padrão, o Laravel Cashier Gerencianet utiliza o model `App\Models\User` para faturar.
Se você quiser mudar isto, você pode especificar um model diferente pelo método `useCustomerModel`.
Este método pode ser chamado no `boot` do `AppServiceProvider`:

```php 
// AppServiceProvider.php

use App\Models\Customer;
use AgenciaMav\LaravelCashierGerencianet\LaravelCashierGerencianet;

/**
 * Bootstrap any application services.
 *
 * @return void
 */
public function boot()
{
    LaravelCashierGerencianet::useCustomerModel(Customer::class);
}
```
