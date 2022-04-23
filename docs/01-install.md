---
title: "Instalação e configuração"
description: ""
tags: []
image: ""
date: 2019-09-17
---

# Instalação e configuração

::: warning ATENÇÃO!
Laravel Cashier Gerencianet na versão atual, é ainda um trabalho inicial em fase de desenvolvimento.
Não utilize em produção até o lançamento de uma versão beta.
:::

## Requisitos

- Laravel 9.x
- PHP 8.x

O Laravel Cashier Gerencianet utiliza o `gerencianet/gerencianet-sdk-php:4.x`.
Se você já tem o PHP SDK da Gerencianet instalado, precisará removê-lo:

```shell
composer remove gerencianet/gerencianet-sdk-php
```

- As extensões do PHP `cURL`, `json`, `ext-simplexml` e `openssl` precisam estar ativadas.


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
