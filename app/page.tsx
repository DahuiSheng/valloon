"use client";

import { Avatar, Button, Container, HStack, Input, VStack, WrapItem, Text, Box, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

// 打刻する画面
export default function Home() {

  return (
    <Box
      bg="blue.50"
    >
      <Container 
        px={4}
      >
        {/* 縦ならべ */}
        <VStack
          minH={"100vh"}
          justify="center"
        >
          <Text
            fontWeight="bold"
            fontSize="12px"
            color="gray.400"
            mb={4}
          >
            ENTERING NOW
          </Text>

          {/* Avatarの表示 */}
          <Box
            pb={8}
            position="relative"
            display="inline-block"
            w="300px"
          >
            <Avatar
              border="6px solid"
              shadow=""
              size='full'
              name='シェアスペース'
              // 画像URL
              src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcUFRQXFxcXGhsbGhsbFxsdIBsdGBsaGh0cIBsbICwkGx0pHhsdJjYlKS4wMzMzGiI5PjkyPSwyMzABCwsLEA4QHhISHjMpIiAyMzI1MjIyOzIyNDQwMjIyNjIyMjIyMjIyMjIyMjIwMjIyMjIyMjIwMjQyMjIyMjIyMP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABQQGAQIDB//EAEwQAAIBAgMEBQcHCgQEBwEAAAECAwARBBIhBQYxQRMiUWFxMlKBkaGx0RQVM0JyksEjNFRigpOistLwFlPT4UNEwsMkY3ODo7PxVf/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAtEQACAgEEAQMDAwQDAAAAAAAAAQIRAwQSITFBBRNRYXGBIjLwM0Kx0ZGhwf/aAAwDAQACEQMRAD8Ae4aDObcuZptXBIiuUL5IvfvNSK8yXJ0LgxRWaxUjCiisUAZrNYFFAGaKKKokKKKKYHDGziON5GvZEZjbjYAmlmzMOZYYpExE6K6hsuZHIvxXO6FiAdONT9qQ9JDKg4tG4HiVNqVbizZsGg5ozr7cw9hrq0y4ZnkJ8+ysylTPPex1ElvcBXHdMMMJFnJJ6+pJNxna2p7qbkUt3bW2EhHYlvUTWmf9pMOxnWKzRXIaWYorNFCQzFZooqkSFFFL9s4Bp0WMSGNCwMlvKZR9UHlc2qkgJ4NZpVu9sf5LG6ZywZywHJRyAv3cTTaqAxRWaxQBmisUU6A1BoNKEmZNAbd1SBtA81Fc21lpk+iobY8clPrrg2KZza+UE/3rUtFWM6DS/ERZQWQkuouRmFyDzpQ+35b2WIN3mWMfiaSi5dCbSLPRVTfeWReKxDxmjH4VrFtt5H1yi/mYgfy6VWxi3It9FLZXjgUSSSuqmw67lhduA1B/sVJONTpES/0ilkbiHtqQD2gWPeD3U0rVoGSqxRRRwJhVZ3STo5cZBySQOo7nB/ACrNVdQdHtQ9k0F/Eobe4VvgdSJl0WMVD2UmWJV7Cw9TsKmgVC2VIHjDDgWkt+8ats3SIh2TKKKK5UiwoooqkBD2htFIQubMzOcqIguznsA/Go3zu/E4TEfdQ+wPUbZS9PiZcSdVjJhi/Z+kbxLaX7qfVpSQCtNrOeGExHpVB73rqMfIf+Vm9cX+rU+ij8AQH2hIP+VmPgYv8AUrjsvbazyPGIpUaPy86gBT2Gx41L+VgydGnWKi8h5IDwB/WPZ2a9l5KoBewAubmw4nhc9pqqQjNZorFFDCis0UhFWGGxyKWdIZSAOqjMrEDs6uXhy0rns7asct1+jcGzI+hHAe/01tHLiMCQHzTYf1yRju85R2VMxezYMaqzxMBILFJFAOo1AdTxt2HWn7cZq4i3OL5JKYJjxsB28a2bCXUo0d731vofG/KlWB2xNDKIMYgGbSORB1WPZ/dqswNc04yg6Zomn0ef7SwsuEkRgzKg0jkNyI78Y5DzjPK/Cttm7KXpGl+Tnq6SR2zdGx1zR+fGRw4kd9X10DAhgCDxBFwfQayqgCwAAHZQ8jcaDbRWY5ohwyL3ZcvsIFdQ6EfVI8L1YqKxcf5ZVlOaZZWbBFXMcour5GtHILkcR5Og8PTpx2PhZwkmEkVlkhIlgexy3U+SG803t4Mau9Fbxm0qolqzlhXZo0ZxlcqpYdjEAkeg11rNFTQrCq5vDBfFYRrlc5kjJU2IzpoQeR42qx0l3k0EEnmYiM37mJQ+w1pj4khS6IX+DVF8uLxIv+uLentqdukhXCohNyjyIfFZHFO6S7stdJh2Ymf+cmujKrRnF8jiiiisUjQK1dbgi5FwRccRcca3ooAR7O2PNBGI48SuUXtmhuesSx16QX1JrsmExYOuKjI78OPwcU1oq7EaRqQoDNduZAt7NbVEbAyE64mW3Yqxr7clb4/aMUK5pGsKXLvMh8mDEsO0Qm3tNCTAZbPwEcKFEvqxZixuzMeJJ5mpdL9lbYixIYx5robMGUqQaYUAFLNsbYSCygGSV9I414se0+avfUbaO2GLnD4VRJL9ZvqRjtY8z3VpDhYcCjTTSZ5W8uRtWc+ag5DuFaRhfZLZH+VbT/yIfvf70VG/xyn6PL7KK02xJtjePEFQRYEHkdaVT7O6N+kwshic+UpF0fuZfxrmWxnmQfef4UA4zsg9b1wRuLtM27JEu2HdDHisEzg8TGQ6nvAJBU1J2JikBZV+UInHLMtwDw6r3Leg3qABi/8AyP8A5PjRlxXnQfdk+NaTm5qnQlFJlpXEofrD3e+umcdo9dVLJivOg+7J/VWQmK8+D7kn9VY7PqVZbL1guBxI9dVYR4nz4f3b/wBdRtswynDyZnW6rmugZfJ1PFjyvSUeasLLmDWapDfKYoA0cwAWMNlKkk6C5zFvGn67OxYUf+LXNz/JAj+atNn1FY4FZpbFhcTbrYlT4QqPe1dPkk36SfRFHRs+oWTqhbZwHTwvFfKWAyt2MpBB9Yrk+AmP/NyD/wBqP+mtDs3Efpsn7qL+mqUafYuDWObHKuVooXYaZxKyg95UpceArtsLANDFlkYM7O8jkcMzm5tflXIbNn/TZf3UP9FdF2dLzxsv7uH/AE60k5S4bJSSGVFQBs+T9Lm+7D/pV0XBtznlP7v8EqdrHZMoqOMKf8yU/tL+C1uMP+s/3j+FOmFnWiuXycdr/fb41g4UedJ+8f409rCzhPs2KSRZHQMyeTe9gTbXLwvpxqRiYi6FA7JcWzLa48Lg2rk+BB/4ko8JW/E1xfZZPDEYhfCQfipqlFis67O2fHAmSNbC9ySbsxPEsx1Jrrioi6FFcoWFsw4gHjbsNuB5Upk2HKfJx2IHjkP/AEiufzDiP/6E33Vp7WKzb5HPCvR4SKBE895HLE+cRl1Piaxhd3c0glxUhnkHkgiyJ4JQNhT/AKfP91KJdjzqL/LZWA4grH77UNugSH1h2D1UVV/k0v6TL6o/6KKjkol0UVPwmypJBdRYd5Hurn2lWL6KepsBhxBP7QH413XZLj/hr61o2y+AtFdVCeR9RrYxN5p9Rqx/N0nm/wAQ+NZ+bpPN9o+NKpfA7RWCpHIj0VG2imaKUdsbj1qatz7NkIIK6H9YfGoGN2BIUIVNSCDdl5g99OMZX0Jsr+2kI2eGHKJb/tBb1aDSvH7FxD7P6PIOkMSLbOvEZb63typ8dnyeb7R8a3jF1+RNkWsVL+b5PN/iHxo+b5PN9o+NG1isi0VK+b5PN9o+NHzfJ5vtHxqtorItFSvm+TzfaPjR83yeb7R8ae0VkWs1J+b5PN9o+NHzfJ5vtHxp7QI1YqX83yeb7R8aPm+TzfaPjTURWRKzUr5vk832j41g4CTzf4h8araKyLRUn5vl83+IfGj5vl83+IfGqUUBGoqT83y+b7R8aPm+Xzf4h8adILI1BFdZcI6DMwsPEVxBpOFhZD+bx2miptFRtZVkLCQW8pNe29/ZyqxbH8hvtfgK8zwG80ymXNH0kcTsCVNiACbaHjpxtV43R2x8ohaQRuoz2F7a9Uaju+Fc0YSUjR1RZKK4ic+YfZWOlbzfaK3og70Un2jtwRHLku/Zm4eJ/Cq/jtsySaE5V81bj1nnXTi0mTIrS4N8WnlPl8L5LkuIW5F+BrdiCLjWvP4cQQbq1j3GpUu9zwlVkjDIR5S6MDz6vA9vKoz4vaVyOp+m5Jf0mpFrL9QjuX3mp9K8HOksQeNgysqkEeJv4EHS1M6hcnmyTi6faCivPjvfif1PuH41dNkbQWeJZF56MPNYcR/fIiuvPo8mGKlLp/BnHJGbpE2ilm8ONeGBpEtmBW1xcasAdKSbubwTTzBJMmXKx0WxuLc71ENLOeN5FVL/AMBzSltLdRRRWBYUUUUCCiq/vFvEMOejQB5LXN+Cg8L24nuqrHejF3v0gHdlW38t67sOgy5Y7lST+TOWWMXR6TRVT2BvNLLKsToCWv1l0tYXuQeXhUjenbUuHdBHlsysTmW/AgdtQ9HkWRYnVvnsfuR27ix1mke6205MRG7SZbq+UZRbTKD299Mdq4hooZHW2ZFJF+FxWU8UoT9t93RSmnHcS6KpWxt5Z5Z0jfJlY2NlseBPG/dV1p58EsElGXnkUZKStETan0Z8R7xSKnu1Poz4j3ikVRHobM0UUUBZSMA+SHF9gklJ9VXjc3DD5JHl0Nl/kWqKmLibDzRuwjZ5JOuQbasQNeB0tzq9bmY6I4cKkgbJZGIBtcItcy7NK4LAkljlcWPI8jRisQkSNI5sqi5P98TWGnjIsSCPA1Wd9prYZVViQZFv4AMRr2XArWEd0kjHPk9vHKS8IqWK2nJI7MNMxJ7Tqa5PIzcTetFhIUMfrcPCivqtHiqFvyeZgz5skd05N34vj/gb7B2K2JYm+WNfKYcb9g7/AHVbG3Xw8kYV1Y25l2vftuCKN1WRcIluJLk+Ocj3AU5wr3WvB9Qzyy5JRfSdUevppTwpOEmm/KYp2RsMYVZEV2aNiGVTa6n6wvzU9X1HjTytWHuP4VtXHBJcIvLOWSTlJ22ePGnO7G1uglsx/JyWDdx5N6Ofce6lMXlr9oe+nu92yOik6RR1JD91uJHgeI9NfWZnCdYZ/wBy/wAHmRtfqXgs2+H5o/in84qr7l/nQ+w/4Vv87dJgZInPXQpb9ZM629I4eqtNy/zofYf8K4ceJ4tLki/F/wCDSUlKcWj0OuAxsV8vSJm7Mwv6r1Vt6NqMzmFTZV8q31idbHuHZS/BbEmlTOqgLyLG1/CvjsnqEvccMUbrs97H6evbU8stt9F+ZwOJA8TWykHgb15ni43Vssl8yjLY62HEAHs19tXTdb82Txf+c1el1zzZHBxqkTqdCsONTUrt/BQttFjiJs3HO3Hsubey1XXYuBwcsK5ER+qM9wC4Ntc3MG/o7K13i3cE56SMhZLag8HtwueR76pc2Gmw7jMHjYcCDa/gw419cnHVYoxhLbKPg8SnCTbVo9D2dsWKCRpIwQWAFibhRe5tfXXTnyqub/fSRfZb3iu+7m8zMyxTG5bRX4XPIN49tcN/vpIvst7xWGmx5cerSycunz8lTlF43tJu4Q/JSfb/AOkU43g/NZvsN7q82w0UrA9GshF9cgYi/fl510khnAJZZQttcyva3ffS1dGXQqWffvXadfxkxy1CqJG7X53F9o/ytXp1eY7s/ncX2j/K1enVzer/ANVfYvT9MibT+jPiPeKRGnu0/oz4j3ikZrzImzCiiinYFQDIcCSR9Ry3tPvq87qwqINBpf8AACqBhsOZMBlU3dlcBfFmsb16DuwMuHVLglQoOvPKL1zpqy6Y3ZFHGoe0dnLPE0baBhp2gjUH18qnKvM6mtr1alXJMoqScX0zy/GRdQjhk/DjS2r1t3YTMWeMZg98yjiCeJHaDXm+IWXDuUdSLcAwIuORF+Ve/H1KGNRb6fx4Z4UFPTtwmuPDLjuxtxYbxS36NjcNxynnceafZVvw2IV7ZJFKhb3Ug15rsWfCyaTO0TdmmU/tWNvTavQNm4RFRREoCMLgjg361/reNeH6prsEp3hi3J98cfc9nSfrjdqv+xkz6GzE2I5DmakVHdMqW7x7xUissW5xW7s2lV8HkMXlr9oe+vVdoYNZo2jfgw9R5Ed4NUtNz8QGBzRaEHym7fsVfa9n1HURm4ODuvj8HNhg0nuR5JjcK0TtG4sym3j2EdxGtONy/wA6H2H/AAqybzbBOJyvGVV10Ja4DL2EgHUHh4moe7u7ssEwkdoyuVh1WYm5t2qK6Ja2GXTtN1Jrr6kLHKM18CbbSFcRIDzYn0NqPYat2xNoRtCgzqCihWBIBBUW58ud6xtzYonsykK4FgTwI7D8aro3ZxF7WS3bmFvj7K+G9vNps0pRjakfSueDU4YxnLa4mm8mKSWa6G4VQtxwJBJNu0a29FWLduQLhFZjZVzknsAZiTSmbdWQWyMh6upYkda54AA6Wt7ad4DZdsN0EtiDmzZSebFhY6HsrXQ4sq1LnlVJr/XRnrMuJ6dY8crpirA75IzMJEKLc5WGunLMON+8XqRtvbWFeB1zrIWU5VAJOa2h4dWx1vSrHbmSAkxSKw7H0PrAsfZUFd08UTbKg7y4/C5r7COLRyamp1Xi/wDZ8+5ZEqaFGDQtJGq8S6geJIqz7/eXD9lveKZ7B3ZWBhJIwdxwsOqt9Li+pPfWN6NhyYlo2jKAKpBzEjiQdLA1ctbjlqYtP9MU+fuCxyUH8s47hfRSfb/6RTneD81m+w3uqJuxsqTDI6yFSWfMMpJ0ygcwOymO1MOZYZI1tmdCovwue2vOzZIy1G5Pi1yaxTUKPO92fzuL7R/lavTqpux915op45GaMqhubMxPAjS6jtq5Vr6lmhlyJwd8CwxcU7Im0/oz4j3ikZp5tP6M+I94pGa4UaMzRRRQM87bC9HgFlWR1ZjoQ7AD8pl4A24GvRt0tnhIT1mbM1yWdifJUczpw4CvO9oxN82oACRmHC58pr2t6av+AdljQXKnKtwDbWwvWdJDtli+Td59dAw3efWaruK2ksYzSzBB2s9vedaXne3DXC/Khc/rNb18KBlz+TDtPrNRcfsaGdcsqZwOF+I8DxHopamJYgEOSDqCGOvtrPTt57feNK0JxtU0bYfdDBxnMsNyOGZna3oY29lNsOOsPsCkOMxLiOQ520Rj5R5A1Q9l7bxoaNg9/wAki5Xkc5w2ofubT30KvBMccYftVHr2IHV9I94rrXl0m1toyEoHSIaa2Y+0m2nhWMDtbFx9FJJimlSR8ki2FlzEqrKw1429dVYz0+RL8yPA1lEtzJ8ar/TP57feNHTv57feNVQWWKiq907+e33jVNjxeLmklb5XLGiyOiqjAWCG3NTelQWep0V5fPhZ2U/+OxQPb0lgPQtvfS/D4vFQTxL8sllV5FRlZmIIPHiTalfNAewUCq50z+e33jQJ389vvGqoLLHRVd6d/Pb7xpDvPvBJhwiRteWS9szGyqOJtfUkmwHjSA9AorxiTe7aSHrH0GNviKl7O37xDyJG8YJdlXqs6nUgcCTQB65RVd6Z/Pb7xo6Z/Pb7xooLLFRVWxO0REM0kuQHS7Pb3mjD7TWT6OYP9mS/uNOgsfbT+jPiPeKRGujSsdCzEd5NaWo6J7C9FbWopb0VR55hcXiYsKjRuHvrkyksqkmx0NzWYtv4n6zk93QSae0Vz3e4O4PkxIo8es1DhpMFEwYhwygMCQdWycR4j1VwvIt1NLtI3UeLN5cUJpI5GkVmQEFMpVgDbzjoamYmKM+TrfiCOHrpTNsnPLJFnZisYeNma5vwsT2E3pdCmYEaqw0NiRYjuvXRDJFrgicXdj3ZU+JjkMEUiojdaNZEzDvVezwp6ItpcOkh/dH41SVxLJ+TZiSbFHvYo4OhzHgL8/GvUY4SVXpDmYKA1iQpNtTbnc9tKbiuX5CNiKWHGsjiSeEjI2ZEjOYix0vfQ1WxgpkkjIw0jlYowCotawudeF7n2V6OoAFgLDurNZrLXSK2fJVjh8VJa0DR+Myr6woa9QsTu/jpE6NpIspa/ltcWOYfUF7GrtWar3ZMnagXhrx51mq9vXt58II8kasXzatewy27OevspGm/sg8uBD4Mw9hFWnJqxcF8qr4vY+KR5ThzEVlcuM5IKE2zAaEMD6Kgrv5fhhyf2v8AatTv2/LDetz/AE07kLg6Ju/jn+klhAPbdvYABUrZ+60iyxySyowjbMFRCLkcLknQX7qWtv3J/kxjxZ/hXNN9cQZFAjiKllFgG+sQLZr8deyj9QcHoFZtRWKW9jpGbVUt492pppumjkQEBQqtcZbdhANwTc+mrZRT3sKKPidj40D6NSRw6OUeqzqLipW62xJFlM88ZUqLIGNzmPFvKNtNPSat16yKamKiNioGcALI8ZB4pl17jmU0sxGx5W1+WzDwEY9yilm+m8DwlYYmyuwzOw4qDwA7zqf/ANpBhp5JQQcVK4+sM7D2VooxbuuSWiJi4GkmdlLyxRm3SSPoQNCc50AvwAqZsbZ/yiRegQRMhDPJcnJ2BRwLHjUTaUcaKsa5mN9FzE8dBpy19NXjZewZI4I0Sd4n1aTIsZzM3bnU8OHoo4QHSLYkg443EE9xQezKa1xGw5m8nHTjxy+8AVOTZ0g44uY+iIf9uqvtLGYyPEyRLiJMixl1JjjN7Le18ljrpWctsnyuQSoYfMGM/TpP79NFU/8AxPjf85/uL/TRS2fYo6bK2vFCn0TlmADnNobX4X4ceFTId4MOqCMRSBVsQBY6g5u3trhh9gyNa8QUfrysbehRUyTY7quZ3hjA4nKxHtYVhOOJvnv7mkZSRz/xDBnMgjkzlQt9OAN/OqBLOksjSIGW9swPM9ulSMNgMJI12xAufqi0Y7PrXo2lhUhkRY/IdTxbNqOYNEYQjLi7oJSbXJDxcWZTpc8qYYfeGRUVWnljaPqm0aSKwHDytQbd9RqjOMuZwL3FiNeN+OnDnWkafDJt9jpN9ZF7JB2mIIf4XtU+DftCOtC+nHKQffwpTs7AQSxiR1ym5B/KNYWPea7TbQjhjIhCkcBaxBJ7fOrjlqMbnsUW2nX0OlaeW3c5KqscpvxhjxWQfsg+410/xphf/M/dn40n2du/FLJklWzBFZyl1DM5awsDYWA5cSag7a2AmGkAuWV75bnUEC9u/SutQinVs59zJ29O2YsXGqRZi6vmuVIsLEHU1VTgW84XPI6VLWHoy6MNWUZbcmPK5qLtFAGzA8eI7K1iq4RLaZqMJIpFrX5WNdcVHIQMxFvG2vp41EgK36xIHdUjaRBKkHiL1Xkkwmz3PGwqbs4Jh5opJDmRWuQBzANtPG1L1xb2ABtbsAqz7BliSZFnUdZSAWGgY209ND6AeJvthzxEijtK/Cu43ywf+Y37tvhSjZuCjRMRG6jKsaMQeRLSC/ddQPVXbdzYUE+DQvGM5v1uB4nmKjYkVZJl35w48lZG/Zt7zWF3skkTPFhGYcLtIo9nGq1iNjZcauGRrBuBYAkDW/jwqVj9344o48SHMsYdVkVjyLZDa1rEHS1NRQWSxvVjA12gjVOdyRYfaLfhRs/edkLzTTGRGLJHGiAAMLHUkC2h7edcN6cPBh5I4oYIw7DMXcF7DgNGuORpdipmmjij/J6B3PRqFGhyrdQBrxvWiivBLYqx07zSPM+pd9fwA7gBanBKxxdIhbgMoLEjXhoeyouDjmTNpexGjHQg34Ht0FO8DEJI7TRi7uVtc6WFxrfuq4wbM55FCLk/Ao3fxsUUqySrnAzMxK5iCLZSPA+/uq2/46w3ZJ93/eq0+FWDFxZQSjELZjfytLeGvsqXtCHZ5drYqRGBN1y6X7PIrOap0x45qcVJdMcvvzhuQk+7UeTfuHlG59A/E1WpXyC+HlaUdjQ3/iy2NTkxUTZc7xA6Zg8Txt321K1jOCfg1TGX+Nof8lvur/VRXPPgf8yP7y/Cisti+GP8mswx1iFMTA/WU2Pt4UvfASC7zRxNbU9JLIbXNhoCefdTdocLHfLIkR4dWTL7L2PppdPsyMohRZMRI/11chTrxZrkWHId1EZL4r8FSJuz8K4Kn5Phwh4kFs1v2l4+NLtvBpJ1CKejiFmIGgY6kX8LVNxEWJw0Yd5VsgA6PJe5OirmbU6864mEMow4WSR0u8mRgimR9esx7OwfhVQ73MTXgWlra8qwhBGnCt/mPEjQqHA5LIAR6ah4oyRkKVcE8nXX0MD1q0St8Mk7vs6wDqmYccuY+6sFsONXSVJMytY2K6EXAsBpapUW04o40VmZnA6wA0HdfnW6YrpRpCzL5zZVX7zG1XtTdit1RY2xahmkUl7oG6vWLBWPAc/KpRvNimnSKQxtH1/JcWIA52pfDhrNmjkijIIz9HKWYKTY8sthz8K32niZA4hkZ3Kk2ZhbNcaWI4gdtTspoNxyxlmk4eSf+kGuEuHVybjXtHGtkmzuxIsxNyB3ALx9FavMQdbeuhoEcV2ct/KNq6YnCB7a2sLeigYodq/eFbLi1ve6+sGrj9RHXZ+zUU5iCSOF/fao+2tSTzB/2qfHtKM8XUev+xUPFYgFrkoVupBDA8GHZ3Vo6rgnyOdnmQxYxW+k6GJdef5Nj67Gn25Mi/JUFxpf13On99tUbECVi5EpyHIfKYArIcq6d3A07XdmWGNpExGoFyqnKPTc29NZtFHXa8uTasJ70B/bLD8a74+dEwixSNlDYtw1+SpMzk248APXVchxSpKsk6Sl1KsGJBGmoNrC48KsEG0sLK+Z2XNqRcAEE8fK/CuPPqXi/tbX0OjHhU/KRrtpFxzdJEskfRoR0jABXF9AATm7daWbKT8iD2Eg/eNW1HiKsFa9x/dqqGycSt2hJCgmTU9xutvSTp3VPp2ueaUt6pKqK1WnUIpR7ZLZgBckAd9ayyNIkTQguY5Rmygnjz8LH21ybZkbXOabEEcVjFwO640HrpliYgkUUkcMuHMT3ZSpIKydVmzi+oBvrbnXpe7u6RyPHXZJ2rL0csMfRyKyyAiYqMhLoyix7mYceytcAuKkw2dVilnSR1czKpPU0shAHt9dM9280mFaGQlmiZ4mJNybG6m/gRY91KhtmWKUCNY2E1yQ7Fcssf5OQA95UG1udTJ3yEYqKpDDZ+2sQmVMThZASbdIijIL8L9Y6U2xODD9ZSNePYaSYnCS4zIk6RBLk/k55Aw4XOQpZ+XGoQ2RJh3ZcNDigw8lxLHkPYSpaxHiKhpFD75oHmR+ofCsUmvtjsj/APjopUMJ9jxZT0cUQe3VLJcA94qLh9l4keViyB2Iot6AdB6qcQxlRYuz97Zb/wAIFb2rh9xri7NXFFbxDSdKscsgkWENMxy20UdQG3E/GmW7+HZIsz+XKxkb9rh7PfS3FYeR2xZjXMztHGNQLKFBbjytamSTYoAXhivblKR7MtbT5ikSuzvBC4nlc+Q6R21+suYHTwNQdpwK2JjdyejiikkbnbJoNO3MR6q7NisUAWMcSgdrsT6LCl22sddMQRzWKIekmRx6reqnjT3WKXRz2XsYtEHVVSRjdWkGc5e3LwDHwrlFCrSWkaTEZDZi3VjBGhAF9beHKmGA2iXWN3bIugNzYcbeqo2CQrnB/wAx7d4JuD4a1tudck1ycHdZJFZIkj6IurqoAJUg24WveuG0cUXghk1zKWQ349S9r99rU16MXzWGa1r8/XUHHsXhlVkCFDG4sQb3BUnxsvsprkTJO1cEvQdKkRZ8yKWFzchQzXA5cvGlyQSlQehi1179aaYvaMkUeEjT/ioZHGmvSE2F+4H2Ct0WwAHIAeqlLGpVZUZtdCpI5L2+SxHxykVJfDYgAZcJCb9iX99qnq5HAkemu6YyQaXv4i9L2Ij9yXyLEwmKPCCBP2B766phxI2SeNAytGykLlzKXVXXv4+6nCNI63BC69nt1pVtHZs7lWd42CEsGUFSCoJXQ3FrgXq444xdpEuTaqznsqKSOSQdAzhGaPMHUaI5IurHUi/Gpe8WKQqIM3WkZbjsS92J7BYGueMxMkeMcpIoikVJCG4WdRe3O9xxqLtjHxyBmWx6NH146yfk1F/Sx9FaeCTjinBx6DihCADllKcLemmO1dmYUWLxut+casbeOUECkbYwNiROVIRbG3MhRbQeNP4d5oG4syfaX+m9Ttt2Fit9gIHCxTOSQGyBbvbjyIy6c2tTTd3DRPlKoQI8RInWtmUPGOPHUOtvTW+ycXEXmkSRbs9ySbEgIvbrbjXTCBispgsGljSWP/1I3ufXmANPbXIWNsVBJBrA0SIx1Eit5Rub9Ui9c4MXivJlGHdGBBKdIDYjzWFj660mw+ImhMeJjiYG3Wjc5gQRqAVtceNL8PiIYGMIWUMORSRyewjQ6HuooDtuzjQkskR8piBxGrRdS+vEmPoz6DSze3DmOViF0YidPtx2EgHZdbN+zUbeHDgSLIFbK9iRZkOePXnqpKXHiKl7Q2vHJh4mVJ7wOjhpVBzqTlZc40bQ277UgHc2xFxSJImKlCmzLlEeh7iFBB9NbDd+X9PxHrWluOfBLG2Fj6eLr5w0cch6x4Eecvh6KtOFOSJM7liFW7MpUtpxK8Qe6kxin5gl/T8R/D8KKbfLU7T6qKAKmduokrRS2jK8GvdSOWthY2qHPt7pJAkRKxA3eTKToNbLppfhfvqw5B2cO3X2mthXCpRXNGnIr2W/SIsiGwdpGOnG72A8bACmQFK9h455OlDjVHYDS1h2eit9qYGNwXcZjYAAs1uPJb2v30TpypjXRrtrFyIOjjjJZh5Z0VRw48z3VWQcsUOcF+kkkkIGpOXqDxub1J2lhI1jY2tYaanjy0vSzGSFTEuoMca38X/KH2MK6cSW3gifY2x4DxFWIjOhAYgcPCt4sYiqouWIAFwNDp2m1a4DYjyqJSwUNqLam3aSanHYAGvln7R92lG6K4H2Qn2kvIVzwzmaUx2Bzxuo1GpIuPbUiNFzW6FktrdkArrgxfEwsCmUPqAdT1W5dlVFktGu88/RzQ5LHInRkdhXKCL9oNRk2qVOsd7frAg+u1644F+lkkLqCFeQjxkcsfdU2XAx2JESk9g0v6a0bEgfbsZFjGV7wt/cakYDaKFrowY24cD6jSd1hXy1ljPfm9+orhh3VpU6M3swA01YHj7L0gLTjNqlY2YLYgdtJkxc0hQluqc5yj9VCeJOtTdpYCQpa4W/df8AHSlTpl6JBJeQMRp2PoRbwpxBm2KTpY8NJcXyMhJ1+j0A8bXqMkIt0ZYdeU3YaXESiw9b+ymYgToxh9CY8RGy38yVDof2h7RUKfBZZiqRmWONyCAC1swU8B2cvCnYhnh9l4fUyX07Wb13BqLLHguUkqDtysQfvKaZ7KwUbsX+TvCVOgLNZgb8uFSDu+rXySTDwe/sINOwK1g9krN0rJJ1ENkLKBmJF9eFv96Z7vbOmikRpCAsgeMLmuRnUsNOFiV5d1Sv8JI5sZJWPey/CtcfsSTCokqSSMsTh+jYgiynW1uGl6VgbbrbekEjQSXdgSAe5bg3Pbpx76s8+KzAdWxB4+FV7ZWEvLM8UZa7sM5YBSCA4AsCeBHrpphN2Yjd5FZXJv1JZB6dCNabYEbbUeeJ+bL1x9pOt7bW9NKkQy4KWKNSzRsQoHEqxEifwm3op5icBLG+W5khZSLsRmjNuBP11PbxrluPhx0PShmu4CMulrxXQMOdyLD0UgJA2NMY42SdonVFzKUV1LAcddQfA8qaYBZcmWfIzDTMnBx25SOqe6pEqsRZWynkbX9hqOkUw4yof/aI/wC5SAjfN8vnxfcf+qimGV/PX7h/qooASUCiivO8Gwu2Z5cv2j7zXTG+QftfCiiiX7il0V/bP0TeI99Q97PzyTwj/wDrWiiuvF0ZS7LZsT83i+yKm0UVg+2UhFvP9G32fxpJuf8AnP7DfhRRXRj6JkStl+XP/wCo3vNWCHjF9k/jRRVPsSIeP4yemlGw/wA49XvoopiLRtLyPSPxqtTfSr4rWaKF2N9HZPpZft4T+daY7G+mxP219xooqiRzU3ZnFvAViimwOWG+lHifxrttr6Nvsv8AymsUVIHDdn6M+Kf/AExU3oopgcMf9G3hSbcf8zT7T/zGiimBYKKKKkYUUUUAf//Z'
            />
          </Box>

          {/* 場所の名前 */}
          <Text
            fontSize={24}
            fontWeight="bold"
            textColor="gray.600"
          >
            NaSH シェアスペース
          </Text>

          {/* 管理者の名前 */}
          <Text
            fontSize={12}
            fontWeight="bold"
            textColor="gray.400"
          >
            名古屋工業大学 公認同好会 NaSH
          </Text>

          {/* 現在の利用者 */}
          <HStack
            py={2}
          >
            <Text
              fontSize={12}
              fontWeight="bold"
              textColor="gray.400"
            >
              現在の利用者
            </Text>
            <Spacer/>
            <Text
              fontSize={12}
              fontWeight="bold"
              textColor="gray.400"
            >
              6名
            </Text>
          </HStack>

          {/* 入室するボタン: 未入室→表示 */}
          {/* 入室するボタン: 入室中→spaceページへ遷移 */}
          <Link href="./form" passHref>
            <Button
              shadow="ls"
              w="240px"
              h="60px"
              bg="blue.100"
              border="1px white"
              borderRadius="12px"
              borderColor="whiteAlpha.100"
              boxShadow="sm"
            >
              <Text
                fontSize={24}
                fontWeight="bold"
                textColor="white"
              >
                入室する
              </Text>
            </Button>
          </Link>
        </VStack>
      </Container>
      </Box>
  )
}