---
title: "Introdução"
description: ""
tags: []
image: ""
date: 2022-04-22
---

# Laravel Cashier Gerencianet

O [Laravel Cashier Gerencianet](https://github.com/agenciamav/laravel-cashier-gerencianet) é um pacote ***não oficial*** que oferece uma interface expressiva e fluente para gerenciar os serviços de faturamento e assinaturas do [Gerencianet](https://gerencianet.com.br) via Laravel.

Mantido por [Luciano T.](https://github.com/lucianotonet) e [outros](https://github.com/agenciamav/laravel-cashier-gerencianet/graphs/contributors). Sob [licença MIT](https://opensource.org/licenses/MIT).


## Requisitos

- Laravel 9.x
- PHP 8.x

O Laravel Cashier Gerencianet utiliza o `gerencianet/gerencianet-sdk-php:4.x` como base.
Se você já tem o PHP SDK da Gerencianet instalado, precisará removê-lo.

```shell
composer remove gerencianet/gerencianet-sdk-php
```
As extensões do PHP `cURL`, `json`, `ext-simplexml` e `openssl` precisam estar ativadas.


