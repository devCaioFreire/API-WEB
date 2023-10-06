SELECT
  `pvi`.`id` AS `id_pvi`,
  `pv`.`id` AS `id_pv`,
  `pv`.`valor_liquido` AS `valor_liquido`,
  `pv`.`forma_pagamento` AS `forma_pagamento`,
  `pv`.`data_realizacao` AS `data_realizacao`,
  `pvi`.`descricao` AS `descricao`,
  `pvi`.`valor_unitario` AS `valor_unitario`,
  `p`.`unCom` AS `unCom`,
  `pvi`.`quantidade` AS `quantidade`
FROM
  (
    (
      `b15432558000113`.`pedidos_venda_itens` `pvi`
      LEFT JOIN `b15432558000113`.`pedidos_venda` `pv` ON((`pv`.`id` = `pvi`.`pedido_id`))
    )
    LEFT JOIN `b15432558000113`.`produtos` `p` ON((`pvi`.`produto_id` = `p`.`id`))
  )