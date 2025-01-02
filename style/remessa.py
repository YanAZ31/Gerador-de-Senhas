def gerar_arquivo_remessa_ficticio():
    # Registro Header
    header = (
        "0REMESSA   01COBRANCA     20969356000145                     "
        "MWA INTERNET. COM LTDA         218BS2          201220240000000000000006"
        "                                                                                "
        "00001 000001\n"
    )

    # Registro Transacao 1
    transacao1 = (
        "10000000000     12377746756          ITALO BRUNO DE AZEVEDO         "
        "000014000000284295          21 00001572601020122000007500000                "
        "0          20122024000000000075000012377746756ITALO BRUNO DE AZEVEDO"
        "RUA PIRASSUNUNGA 13, 13     CASA DE ESQUINA COM PORTAO PRETO 26381433QUEIMADOS     RJ"
        "Mens. Referente ao boleto de dezembro                          20     000002\n"
    )

    # Registro Trailer
    trailer = (
        "9"
        +" " * 393  # Campos em branco
        +"000003\n"
    )

    # Gerar arquivo de remessa
    with open("remessa_cnab400_Italo.rem", "w") as arquivo:
        arquivo.write(header)
        arquivo.write(transacao1)
        arquivo.write(trailer)

    print("Arquivo de remessa gerado: remessa_cnab400_ficticio.rem")

# Chamar a função
if __name__ == "__main__":
    gerar_arquivo_remessa_ficticio()
