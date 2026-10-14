var ATLAS_SRC = "data:image/webp;base64,UklGRlxPAABXRUJQVlA4WAoAAAAQAAAAPwEAPwEAQUxQSGgYAAAB8AcA23op8f9d12sSGBgBYZAuCxPFNwa6imvrCmLnIvYWdst2r2vXmsSbdcsOZBWXBmm7WLpEYBgYpl7X9cfMnDnnzHk9h0/8ERETgCQk2LmiHLtze1z/6oxfloG7Z4iSoybX2KuH76Yhiq/7KnYc64kycDcMUX7DekuW5/XYHUMM/t9vLNvy3N0xxOCpthwyJEOGGDzVkkOGCFpi8FTLTYcJgZI9yqNgIQZPtZzC7O7BQURH/OHt1y4tCBRi8FSnIDf8phSBSex5+YeyV15WyBAhBk+13LxceykYFkT/F7bacYOXHAiGB3HoVMsp7bg4MIjuE2PLluruLUCADn7HLZm1d2jw2p2ObVtedAAYGMTgqW5h7JfahQULzvncclPfHB8aEQa+bbVAnhgWxClfWG5mw7GBQRTfWacWyFVXkAhHostfHbu5TScGBoqvW2e5har/XREYDGTnB3bKzav+10VgOBDF1613y+XlZ0YIxggXVzqV2P9sGxCMSq9bb7XM8pSuYCAQQ+Y5doryc6UBEeG7qxw7HVrQJxzaP2ApBXnbhSRCkej3d8dOizdfGArEmG8lp7RhGIKB6D+5wUqL5T8WgSFAHDzDcmobvxMMRLcJDU63vHDfICDLnpLckuMC4soqK30rDg0DfHe1g4XRyM8tp2/5ISFAtH1KcqBE6DvdsUOnYNRqt+zt3mFAdHlwlxQ4xD5zLbfozwwCstMDu5xJ+auDQyC6pUYtkXf+BEFInLfFyswLHZOP2Huu5RZ9dhAYAOR35jl2Zu4EkfBku3E1brH82b4hQHR723KG7g0AjNhopeGliiBof0+VMiNv+37iER0nW26prLEgkp7E9dssZ+iD/gEwYmMabP+8MABwyBzLmZrXI+mITpMtt1xefjaYcMS+b8ZyxibskXwjNqbF8ksVYMIV39fgTMnrzgSR6ETHyZbTonXHJhxxzmrLGXuzc/KN2JQmq+auAjDBiL6vWc5Y/X2FCUd0nGw5TV50UJKRJb+tkzMtLzoIRMKN2JSBnRciSjAc8Zmz4bGihCM6TractuokIzs/2iBnwUNR4o3YFCoYU+UAIjpOthwixNC5lkNoxMYwIds9YTl8iI6TLQcJTliZFfLWy0Ak2ohNYUL0e1VyVrxSgSjBiE6TLQcJb6pzNsi6lRHTmSBnbszQjvMTKsLAWZaz4oujkeaIqea0grvjDM3dD0wgAhi7y1m68vfjfvbTFH9+7T69+/Tp06dXKVKPoigiydxD7DPHckb+UpJERFR25kdWlrR4x9KFjef/bvSYMWPGXHn1qO7ty8uL0Cwb55bo1tqMyFvOJZG0BPr96OWvnL1qoZtVXZP1W9597fU3fn7KKaecNri4sACN2WRuIAbMtpyRdccgcYiya6bvtJU9LVWzTr1+y5Yt2z78y5MPnnHgoQeWocmIjVvfaZsy9Vr3xCG73rHFltzq1Xwcx25+w9fLP3v8zhsP2atnGZok2ZqIsqdiZ1LecgmSlhj2eqXlnKtm3WTdR3PmP3bF6Z3blZUCINmKhq20MrNkbzBZiGNm23LuVpO2rbp1b/zzlccHoQAASbaSH9Rkxrq/bcIQx8x2LOd8SXLT7z34wMhBewEASWYb0fffljMof3EUiCQlh822nJRSHMeyvfHLV+8YM7AdADAis+uSqgw1/KmEiUJ0e9OxE1aSbVctfOrS07uUAgCZPWjzZ2dU2jYCRIKSbW7fLiWNbUmyXbPhjYnfHzaAAMjsIAYssjLi9/slDI5bYTmhJdl25cb3f39G70IAZBYAF3+bEXnd5SQSlBzwSiwnuCTZ9vrZvxjZvQQgmSFir1csZyK+vwTJgu9VOdEaS5LtTdN/e3gbAGSGhq7OiPz1USASlOz5QoMcgpJsfTRhzKFlAMlMjNicCXnbnaVEouCKXQ4D25Ltqs+fuWEAADJNRMdJktMf+z97IVnQ9hHJASnZrp7544FtATJNJ61zZqZ0Shbi+OUOCluSXT3/2TPKATItF1Rn6J3EGSc5OCXb68efXg6QLSHaPBrL4UAUP+QAsSXZ68efUQ6QLek3z2Fx0LIwsS3Z68ef3gFgIzYd8fLKwDhmfbDYkr1u/OnlIEk0/xOHBFFwxy6HrGSvGz8MAHoOPrTJbj+TMxp7SsKUTLJCxpbsRT/ep+/oKSuW//e///3v129+aWXo30kz3nHY2JKrlyzY5mxVw0NtEmZC+NiybaWYGXn7CBC7GyxJzlK56nuIdj9ks7zxlN09r3YFk2VS3vFMYcIUPxQ7z3i+OFFAnLbJyie868YoaYaszCvk6QNAJEvnyXnGb4iEJX6VT0h1N4OJMy7OJ7z44AQa9qWVL8jxzwqRvKUPyPnD5hFg4hCXVln5gVT36w5EAvV7P1+IvfhAJBDIC1ZaeYFr7i5kIuHwj/ICuebhCiRyhDO35wNyzcNdkcwsvK0mD5BrHu4KJhLR6S3LoS/XPNwVREKduCL0JHvNnypAJHT7pxx0kuzaGWe0A5HMxL7LLAe9dsy7dV+ASKyrtgedtPrJ8/cnSCQ00eYJy8Euf3H3SWUAiMQmDvkk6OI/FAIkEpw4dkPAyZ8PRUQkOVFwT43DXfEfS0gkXKdXrGCTvxgKIum+uzbcpK03FDP5zt8ZbJL/sSeIZCfaPtYgh5qnHAoi8TpPc6jJUw4BkXxHfRpsnnIIiAC4oSHQpCmHgEh8ougXcpDLiw8HEQL95lpBFvvlMobBQZ8H2ysdEAY/2hFsr5WHAIE/WQ5y+avjwqDXW+FWNzoMjt0QbrXfD4Oj1wfc5WFw9rfhVn9ThMQnSp6QHOjyOxVg8rX/p+NwW9g7BIZ9aYXbB72SL8JFu3b3nF+9e4e4ePcO0f4vsRxu83sGQLdZDrllgwKgYnrQ7fphAOw1M+AsjwuAERvC7t4AuM27e275v35u3t1TMG73DtF3huXdOgd8ubtn0GeBd08AfB5443bvyFsu3d2zoO/ung96/f9+Fuz2mdF9t45cf28REj746q4Ak++zoNt2fgAc8GXQTesdAL3+HXCxX2qXeCDvshVq8qsdAgC3BJxr7ikKgZ80BJu89WQQyTfk44D7ZEgQdJkRcE+XhsFbAfdYQQCA0Y31Vph5541EABInrAo0+etDwSDY4+Vgm9gpEAruqAm1O0GEIDFsjRVg8taLg6HLP8JML3cNBBDnfmMFl1x7LYhQ6Pz3IPv8qGAAce5mK7ga/lASEp3/FlzyNyeDCEbiiPel0Hq3b0iAOHW945CSd1yLoCTLfl5lBdWU3mBIgCj/ZZWtUJK/OAFEWBIdr5u2w1IQSfpjCUMDBHrfutqWQsjLhoIIT6L0pGfW2JICR668PCJClEDZyU+vsS0Fjeuf7YIwAQi0P/XX7+60LQVLXPtCbxChSgLoe/20StmSgiT23H1ABCwJoP/I+2d9a1uSQiP22isiInBJoLTX+b+bv8m2JSkkvGZMEYIHYASguN/I++dsqrJtSWEgN3w5pghECJMEEO077NoXP6vZZVuSEk+unzi0BAFNAkDboy66bPzSattW4+SSXPdCLzCkADIiALTf/9q73/5qsxsrlpREsj+9rTeI8CYjAkDPQRc+9NCMb6vcpKREkexNL55CEIFOkgCiaO/jr/rbvxbsqpFtNU4GydbMkZ1AIuRJonFZ24MuvfShefM2uklJym2S7A2zfnkwQAQ/yYho3K5Hz1H33PfeihX1zuWSYtne9NeRPUtAIk8kyQhN9j106LinHn/265wkSW5cOfeRUZ0AEPklmwTAwsLim2qtHKKmbbthy7tvPjFivwKARH5KEkTbBxqcIyXFbnb74sUTrxnVvUMbACTy2Yhd3necIxrXrlq58r8T7/3FVQP7dERjkshviY5Tc0XNsheeef6uoYcPOawTmmRj5L3EgYusXCDPGV5cUhyhMZtEXswourYmN9hbxpWDUUSSyJdJArghzhHyjl/2AEAiXyYBlJYNmRA7R8o73vnx8e0A5kckEA088+GXP25wzpRdv/KJ4e1A5j8EsMfZ98/YIudUyfbKJ48AyPyGQFG3MydusK1YucSWZM8Z0wkgmbcQKDj4p++vtSU5B0uu+k3XAgAk8xECBQeNW1JvS87VcuWU35zYGwBIMr8gUHjwfUvqbck5XHbDpil/+snBHQEgIvMGEoUH3bek3pZzvGLbrv58wtgLepYAIPMDAuU3Lqu35SSUZNvfzvrjuceXASCDj0T5WRO32nJiSrLdsHPVU6cPLADAsCOiAX/aZMvJKsW2vXn2H0b2LgYihhVTR5tzZu+y5ASWZHvjvF8cWgSQoUSSSL3fw6ttueWScp9tSXbDhz8/tTtAhg9JNC4aNOTwpoccfswEWW6xJCenZNdvfv2yvQAyTUxrEpEEUNiz13F3379k9crm19Zbbqlke90zD2yyEsG2bG97/bJuANkikhHSyohkopAAyirOum/GguXOsGRX/+fBM9r1/yg5bMne9vpl3QCmRKJxcXl5++7nXX3lmDFjxlx59Zl7digvb4cmmRgkEHW/8u9TN8q2lXqLZFdP/2H/AmCfRLEle9vrl3UD2AwJsKDtkaf94s3XX3tvS31dk/Xrp7z+2pvjLzjlyLYFBEgmAAm0Of53U7bbtiRnUnL19B/1AxBx74SxJXvbG+cWAgRIAF2G3PHk819W1judldu+fO7JO/aPAJA5jgTaHvfIctuK5cxK9rwf9gdIEsljS/bKXwwuAgkU/c8tf19R48ZxHCvVOI5juXHd/F/dPLQTQOYyAm2Oe2S5LcmZlr3u+aEACYAYsDh5bMkNH4/dAyge8ptPGmxLktOqxrYbvnhtdHeAzFlEm+MeWW5Lzrjs9c+f1gEkmm7zJzmJZW958ahuP/80tiVnWrJd+dbo7gBzE4FDHlluS868XLfw0jKAaJa4IbYSyJY976Vdlpydkr39rdHdAeYgosMV/7ElZ+XWx/cvAIlUfpxUlmzL2SvZlW9dUQ7mGpKD/7TVkrNRXnxBJ4BIlbi+Lqlsydkt2ZXjOiHHEjjxA1nOSnnjOQCROjF4WXK1Qsnb/nFCbiHan7XAkrPli/0ZoUUdpzoOJlv2wuEASEaNyVZGVDyw3pKz5quDwJbt+V5QWbEXnhgRqbI1ERWP1lrOWvmzQenoPMUKKTv2f/qgpNNJ554z6pxzT+oUAWw1ZNdHay1n01PtWwYW3lZrBZVV/cuLn3tpbfWOHTuq175y70EFaD24cqdjZ/WtIFoc4ewdoWVXb3OK9Uvu6wu2DvLEhZazWK4fmw7isKXhZStFu2FcIVojIw6cbjm7Pjo8PaXjA0xONfbiA8CsIwGM3SVn2cyK9JRMCLDUpQ3Dso4EOvQaNsfZJcd/bos0EkWPyGHn9cdkGQnud8VTC79qcHbL288F0wDirM1W0GnlkdlFYOAtc6ud/fL0/unae27QKfbEjllFtPvu1DpbUvY9Wpyugj+EnOyPTgSRvUT5T9fIkrNeXnUyiLQSvwo0SbLr5p8REdnc8edVltwK5Qnt0/f9Siu4JDeuW3DXoAJkNX9Q5ditUa65Cekm9nojwGzFce3Cuw6IkNVEv+mOnaqURfP3A9MEYmxsBdbOzxf89rofXntgBDC7Cn5cLaWUzbW3F2Ti8h2BJS8+pk8pGhNZTbSZbLl5ue79D7NFnrcfiPQNnB5c07uAjZHlROn/piA5ntjve5usbJBqb4uI9JM/qZECSq4fV0KiNTL6QbViNWl/83Q/lN9fbWWDP9gPGcFxqx1WtZcyQutAnzfcbOXii/YAut27ITu2ji1gZvZ4uiasto5AxFYB4LDn1tZU76qe/8z5B0ZAt8er5SyUx5eDyOyAF6yQ+nLsoAhk60CHky656KIL9y8BiG6P1TobpeqfgMgscU21FUx2XdXCuwYBbBVEs4yw12O1VhZIHt+NGeOAGUFlu27uiPZonWQURRFJRmNrLGeDvxgOIuPRj6qtgJLs9Q/3BFtD88TAWZabl5QuueqGAiLjxIA5QWVbrv9pAdh6CN64S25etpW2xQcxK9o8pcBy7M9OaV37zHJzcuXDT1Q6bZtGIQtAHDrbCivHfqMCbDURTtmSQhy/1K39j+c1pMfyjKFkNuBH1Q5sqepn7dCKTk4h9qdDQXznaystlt/sAWYMRP9pVlhZXtwXzAGxt91axAgXfJOKJKWg7aORjeTJy63A0pJ+rUuNJG+7qwxE11ctp1l+uzuYBWjzsKXQkaUUYs/q1ZqGb3Ysyd54VxlIXrollZrK7ZU7Uto+JsoCEMM+cfA4tq2mY2+4tBCtlujySK1tN7x9ZhlIFD9tuVk9fcbZZ14y22rK8oRSMHNgwVVVVtio6unxG938ut+Wga0GQMUDHy39cMK1gwCCOGRxc/KXRwPA6G1WU7EnZQm6TawPGsnP7rnHGXe//9HSz9d9tOy5U8sjtGaifMCAAR0BAohw1vZU3ugUFRSwz+zm5PkHZgWIwz61QsafHAeAPQf2O/ysfQaUo7UTjUk0cWZlM3Ld2Igg2vy5LoXq8xFlA1h8w7dSsMjbrymISKJZspWBjdFkC1YcDwJE36mOm1lxApgd6PiiQ2bpoSAANotcGuHMbU1JO24qJQAQF662ZDvWP8uzBMTgqVKoWDserACRmyN8r6qp2NP6oJni0attSbGfLs4WEINnWcHiXdfnLOLwpY5txa68lkSzRRdP22HbC44nka3EDTulQLG88BgwN4HRJVsdy952bzlSZe/r3pw567XhyGKy7zTHoWL5mTIwR2HPJzbblW9dUQ6mBOzZba/OzCaQJy60gkVrTslVADqNeuCRK7sDRMokAGQXgOELrUCx/FgJmKuAKAKIFpMkspwYvtAKlNh/a5O7SIBELiQwfKEVKpNzGEAiVxLDF1oKk7/mtFxKDF9oKUQUSiCGL7AVIJ4cThzywFbHgSF51cUREchE2X3bLQWF44+vKEQwIUL5jz+wFRCfTv75kCKENIHDJ222FQwr7u8NMKRAoMN1H9ZbCgTXvn5OARhSAFF0yPhKWwoC2cvHDQQYUiBQccmr22wpAGw5fvWMtmBIAQQqLnl1q22lmFyWvX5sW5AhBRKouOTVr+ucopLLkjc9OQRgSAEk0PWIOx+YtWn9hg0bNqz/VkouW/bsKzuCQQWQAKK9jxs2bNiwY4856z1LyWXJ2x8aEpFBBZBEikdMc5LZspacBjCsAJARm4xwxDRLCWbJy87pAIZWqsQR0ywlmCVveKwnGGwgjngvtpRctlz/dG8EPLH/z9fbUnJZrpl6flG4gSi94OVvbcdKMVaiNF55eSEYaiDQ9aKXN9Y59dqGZJFXXlYIhhpAoNvwca/O2VnXuLZ+y7S/PbHZShLLKy8vRMCTQFHZPpddObrxmHN7lh62LGEsr7ysiOEGMEILSx9PGssrR4IBB4ApR7iy0koWx36pCxh0qRP7fpg40rcXMn8A2j/uxJVfKAXzBmJ0tZUwsZ8uySv2npkwkteeTSJ/JG+ulZJDsudcUI58khi+zikoh0lSbLvqnWORX5Jl9+2SmpJzsRrHcmN9+sTVvcD8AkT/9x3LtuS6OAc1W7Nr3Usv/n5oKUDkm+SwObYke/Wdf6nLOXWL35s+/T8zXrvuvJM7lhYBJPJP4tipO2xvenFEwX6LrBxT+/iQbhUVFZ3RJIm8lOh9/YN/vn9UJ6Dongbn2qp3TwAARiSJPDaKCJAY8IqVY+xFJwJEnksCIAHitLVWjom9YFQ58l+SAEC2uWOXlR6ptVjecH0Z857miX7vxOmpsy21DstrrgeZJ4E4YaXVInnFr/61Rbak1mB5yYnIo9v+bIfVspfLK0b8bEm9bUnZZ3nhcDBfIvb41XYpNanm1gKg4JAbJy3faVuxss3yB0PAPAlE53+6JV4zDBEBdDps7P9+vcu2lG3SH0qQNxMnLbNa8Nc9QYAE0P6o6/713je2JWWR5c+PAvMlAKcstVKQNo0A0ZgEgPbdzv/n57W2JSlb7PjOfIo4damVgv/aqRkAjAig8+AbJy3fYNuKpayQx+VTIE5dZqkJec33QKRMEkDHwSf98d9bdtq2pCxQnkWcutSWpNhrryohWkwSQNTr9MsmT1vlxmqcAcn35VUgoqMfXu7Ga68qQnpJAkCHLqfc8d5HXza4sWI12QJJspcen18BRJsT3tm4du2r5xWD6QFARgSAngP+5677525cu83NSnGKsu26eacg7ybQ/5ijj94LmSZJAIj2PXbo5eMnzd25c+fOOqdes7N64d2DovwLJBozU41JEo1LS/Y7Z9SokTe99d67zU/711UjRx0YgXkYwCiKiGwlGRFNR10qUu2ExkTGAVZQOCDONgAAEMAAnQEqQAFAAT49HItEIiGhFAjl8CADxKbuFsTgAZfADv8jrRuA+0/vn7qe0rYn8P/c/77/qPyz+YHc92n5x/OP/D/x/7wf5T5l/7T/j+zP9OewD+oP++/t/+c/YP4uv2x93/7s+oP+lf4P9q/d//3X7de8b+2/6D2A/6R/Wv/F65Hsg/4P/U+wL/Mv8N/yvXU/an4O/2s/bX/o/IX/Kf7B/5/2z///yAf+P1AP/L7EX8A7Fn+yfiV+vHkx/d/yZ/uP+e7eny97Vf2H3Ksr/aRmi+2f6b/Cfu58Y/7rvZ+TX+P6gX5P/Nf8/4rP9V3FFrv+l6gvt/9G/0/9u/ev/RfFZ8t/vfRX7Lf8H3AP51/Sv8/7G/7T/K+QF+D/6P+9+wD7BP5h/Xv87/d/8b/4P838kn+d/mf9d/4f9J7p/0X/Lf9v/QflT9g/8k/oP+Y/uv+S/9P99////t+7P2J/td7Gv6nf7j83D0rpgGGn/vxzd6yv/DK6ShRv1XTKteDvcGSYNkBVp4kq32f/VUyPzS2A2Fn7Cw0HPVSf7qJN+q6YenUpurNODPEXK1yK+t/oAo/6wZdmzpoZd0mCOMHnwvuvb7FWGfDXYiHOeWl/8xK6nMT0cCRIJfnXtsYlOeSvmZruMA/lqIUi9L6jb961fylHNMdkR0ISDzxbYchXJEP30m0+5oRJt4qDzCdQd4a/JEw/aNbnHfXDz3pZl9PiBwT+f2ftkCKd1kU6iQXUTeJwI+fdJvdnuHrs5nB2yFNoSRwlSJ1SlR6TmWwD2ofIFTeM1uR2MfeVRgdV8U7TCkFFBPl2ZN67ev3qeWlPUOsL5ULzWoo7mxJlkPEtUGodKuMHgHfM0LVmfskgDftBHuja/JVv/CVr0Zj2YBh0ETA+IKrsLWDmo8G/onWTOB9vlWEY38YD8PinRuLhLkmZdc3eS8HfeL9gMLi8P8V25NWWOd3/8XrEX3cu3puYDwS1zfTfhDQDZqZjCKLk4Jas7LapUSjwAgfAuUXjL6sHH1SF2i6syHk0WicobXm4F1r1FS1BrfEcmZyjtO+mdCLKdAUgDxLdLE1hqnYn8juESk+lrwwOO1b23nepko/seeK7t239lk0dBPKdWNeTxorw0BQaJAnSFFASqJ8kntzjHpNwTfHE8jc5ZZAn/8Jcf1vEzx13wMfn6cGQYmS2eEDiSKQVXe/ARzBg0qc5Bq9nFvr1QmGhdIKKv+71kDndOlwSjedaQeTe6kRMIj3uAxs1tRdSc7wt5FIKsGC7is1mb5lzMT9PwezjEln/snFO3IjqbzmTHJJMF3MhwN7xy7xYWMfnHKTBzI8fZjyikvRlvd+sjD0COhLUFq7Jgky4EtXH7OK9/chMv7BElm7RkpIDk6YZWunZicSuhfeC+MiTzmwYKb+cnriM6XEQ7P/qucgSDpnP/q+z85H36Ncl6Dvmk8Cg3MLMF5F9b62PP4h5UUvfOfPifotyv9afcpQgPhO88ZHi5ip7syTh70TyI3WoIZSlOTw9Z7o8nmdgPoXz2HEAjo+OzrvwQdfgry0g7rblUsvLBxfawmrcfrmeLrW29GF2IEHAUtAiqQ7yyuyJpc7MyvRPREISe02bkMv82rNyW32EA4gT7p13ZKiyf/jYVmmMgDDxBOBPwvG2nu2WpdD18QJzohHTL8nXyL+OmM21cFFh9tI7PZhXktWkalX4TXqNY+1JHQL5F7fTOFUZv+ses335WlZNlv2IKoIjAj45wjXM//2eN3W7pNeycA8KvIL5P001I81g7+MY3iN7dFQfZPBlaCPSH5JRVMF8JbyNY44kgTrJymgenQVpDKggPUFGnDg8kzPod77kCrbCOZYZxdVsVUoAfnoZgw99e6r1el045DpOcfSxxgjO/8nY3i/VsxSGtcakZlKsC9a/lNYyqXH/yY7dCiL0FTLVs/+n9YcfTq2S+LdUickbybpgN31dyl7i0jgNYCAeDvUyZnvKb0A5bDgIqtJatn/1XTEjqFm7J6bTF3/Wp0AxQ8HK5Ga9GDCX3Q8Y+umvpUySkTNSxCv0h4DVPuLwAP76REQ2TWJZYoUP5xDOYRlJcPfL/+zjF5CUgMDmXtMXRDpOgxAvWlBSQqGJzCA8A1WVHu/D8gFanlJiH3qC0k2QA0LMimS41usgj5bs3rc0wII2AP4M2regJ58rGKVDR4D2ivNybz1Y/BDBJ7iCKhQHFM+6qIhihqAl5pSAmf/YN+dxmDjvIeqS9x9OY3zgEadXXOza7VNnPfV1rhL1bQYfa0mVuvRz39ZcXU/4cL4f1HRruQsZAg/2G2T9/veYT/1uU5MrcCJWwQdyr+0BaL9lfcOCXO84BWHKpBUqRafsUEKRg8TaOEEK+3jJk7ldUTh/4/vD0cF5ppE9KT8IenkX2K+hhZvF4K29CaZHn5hF6KtZiH0BOfRviQkJ0vxqO8Z7+zj1ua2N2/3mx/dfiYgzFDx2CD1nNWoRPnCwsg/cXMDGXxxEE3iHtJc5V49aq4WcmIsRTyn4rAlt96Jj5Vby9MJjZcsCRDIj0w3GaYFT85DWbS6qedPMTQ3EWNbRuvT3naeVc+rSlcZhuLll/Xuw76E2eer/cSwuOXyesJuolHFR3vhdpRgvbDKN1t9PlQ7iH0c+in0n0FygtyQifX/4xnCEZPxKRnMq3sYlB4U0OGfAuQ12rJru1M3EvagvoagK1vM3vvAQOPRn240APXOBw/nTGvQQFCGpOecxtHH8QZCO+sXA99OIW7e+j0rKvPLoie5C+ZSCV0iocnM0EkbUNHQ4vQ3dZiU9zfOURFKmoKT/cw0GQZ95qPRroOrSyVA1XcC7xLg+2UiraXtFXL5ne5r25p1m7wCEqT5ylE+jx62aQ2sU4tjW2+iIlWXDzIQlNa5uZN3hFddHD2OcEr8GeSF2INmBklaAgABt/hWSF2+f1ZCpg6ZjP1AT4mAPtqvhIFlk8K7daA9KzghqwiQ7wh7rz/FTZYVVY6Wqsy7REPfQm0NTI2xl+Rq5PX5v3/etOlr1SCW2KBnFx1eq+7iHUTbC6yJXDHZn1ms0giZeEqGZZiIpk2807O2MFzjTvqMfp5IQUObLbX50ZfJTr0882sdxykv7xrAde1rp57PKn8A30BmhTBp1EDbqWhB/HnwTLK2TOWMBeLdn4gDldpnFKuvVD0e/FPFMlACpZLEfsuJyJYNgyQszRZ3r4Ne64ZHLg38qAeoZSSqMHmdve9tHJvVPnRmCqwQ/Tfnerk1LWfqxx12EuJf7zZQz3sFxAHVQH988DGYk3PCNY1fT3SIcTLOl9GLSkcVor7p0gB0k7lYxYsWL8vd6BS0rn6L5E69mB67S1AbeehxVNEAYifrecvDcXtA4NyLVk7qIdZct/jOL8+kMbQ1PFGkvt0gePUgnisKx15tr20cacIb09WWm3EwfTWDJj7G7yh1kmThm6/dk1DBeT23Sxp6o4GHoa0sU8u8aUE/fFALim+b99UsRXA2msCyscuFof4F9rGgb/3nCZRRhNzXFuAkKz8/I20U8R9bPKiG7hC9Jh9SArPR6IYQemWC20X5c/KNAYt/lNe1j8fW8jVk7pi4PJzKZI1EiCYFsQ9jb3ZfPGnVLJRTsXbK0KohUW7i7SmNujCwj5rQ5fxeLW6GiYPEdq7byu9jt+FXJfZOkLK/7KqaoEk3WpoWWlFC7An2404uDNXjB/PMhn19Fj2YqDAWDH3JgJkfI5/j2u5uyVUqQB4EfSNlx2lnoTSUb1VNACKduiMl9qtp9nrhS/Eotb2k40qoaNCPlIwIsSnnJfv6K51w/f0WDZa3n4Xbk0r4TOp5P4jvIL/yxcTKi25T/11IoK1bQwaNd/dtV/O7ZodYiE0/xU5w5UrJCzBtUcNXV9ZK+rwEQVDw24PTAK/D+GkAXXbfD0MOPjLyQVc5X5h1vbP4c63sErr8fX0BXPUS9JkB8KUtWQlVgupVDzmiCSyaoEfJcLsWakPG27YniESr+u7r/tO/F4JaHvjNfpOGMpchbMzb9F5G/OvWwjirBgpvuSx7rWCVYHQ2ksSo7aT9RPAIjB/RZ3R/+/GtTXBvMXU6+gCdTT/WnaBm3ExFIMQiP0qrw3P+zC38ENsKkQ3Xz24/mFLwCWeHYI5GefLWXdrtTnR8jbLcKnLI2IEFCPIkbtQqCAq9ufb3XGOT1FqmitACfeSnBtoJ6dxT5p5oUNZKbqJTLJJUz4LdOJiTYQn1OT14JjO8W+piKx3XeiQdPOHJ4ktAlN3+I66qd8lo+FKlDwlk5Hm0DU59WzbvnaVqtXwubFr0p7VNwDMZMu9PmSDQmbE71lWmcC/P/DlH4nppOmWwngq0MzOEIOFXhqThLNYWZ+g3DLu2qyvpu/OFCSSc4JI401cV42XXzoo4AczQ0Ta8pYPcPuDagkU9BLMXAvdxw0wKoMkFSyiXkJkv0a/xO2amySfk7UhoZrQ3gSVKNNwBhijCbnhLEqAZuEokfb9o1jNFgSqCKDDbfZuwe5mEmjCBVcAVNywbeEz7c/efsrqCNFds22Ma+TgFWRf6rpKrGK9/6tM+T0fiskHo56YpPQzevOJa5Zpaphanit5cizX4rpphUR5DlooOjd+OhnouLMDcNJ7wRoOynS7QDT8xV55KXZvTs4XPEsZWfLSz/RbVyyPQWuP2aupipe+sZxGZayyPtQHgGCgrntkLZEcYG9X5eOwCOSBRDLG75IurpbEh9BDpt9MhlUksdwBvkCB6NN5eV+SCkI8TyQhYP1lPACGuBj+/kz7AN15jdfzPsAyz47DZBYQOWGSRWfeASrfJ7wNoFotP9wR284sVTb5yCKH6nLIlJsVkchJWWtIBb33s2bSElAGuYvrZzpgjh/oYlFuQF+BfFidP5DZH24fsNmpSG6LmpLwb91oziqkTzIuDYi0KA8Vl7TvzqRl6H3/kEIfX+Bg+pZC3nakaKKPfXHCx6mQ/ODradd46/RjI2rV5z+6UjuNsSdbYEez4F5q213tdr7L8tYE227VcpOzdd23bTpwTse1q4tHzYzos6ErkShAXsOgHtjADwuPmz8V5hR7OliSlV+RpoTMB41gFb0Dpk0IWtlqkLonOO8N733HZf1eBTgF7qczIqNW0877/HhkBAFlCS3zxR9HkTXiTLkCCnHR6PWGQGj08BvCZp10Sj4SedGmeHMBf46ykRykJ+MVjnkh74GgE4fvt9xOvA/9Tm23d8mDAtzgrcSWHHeQapGjKYT3ewHGK7e7V0scnl9RIxYsSSrElRCWq/Usf+EDOqNPKI6ySi68uEKnLWicLOxfgwiCWoDfoS/qt5zWWFPGBjQl41ePapGLr9tH3QT21cRCXxKB/abZ6OuPqvR3PCxEa33khm2XfXlf1ZRskBQtioRJovwvWVjZaXqG/fq5Z+wynvgqQlz0j7OwAQ3rviTe9CbD6XfVkrXkyGQSMM88/AmTulCQD+H0vs62ckc+oUyWCjfx+bCRhV5AyMBbn/p7nsOahrTyslw+oGxOBW9duIY///cUI/r/9dqJ/ifnKXh8t0mTrxxFv692rrfUVT3HxyvoRq67BGK8JAt2v3rIeh88TkVean8Yjf76KRT8re0HGqE57Zuk7rmcFKKFP7kDWSvUY2CjI8OQTO1illplfURvIluMVvES/AHirip1DkxEFACDwAJYLEcOpTerXNT3T2QobCHL0NlLmGRHGfVxv07FCVSf2Sm7kmn/+5eNY6NsMEetg2AQn2JLBGeoADjdS79+vHfswatg2XRawliZm+rKmPFCahGPR+s7Y8AIYHMDoKFkJvT9huDvtwiZZAnUmLvWqyavB2Hc7/T1gi6IF3+9QYMyDNnXzDW+psSvQQfkcZJtCNuIPOhnOMpYrM25hts34j60TdYGODmR8cZgyLaNkaf3oJ13/nNDyqKOeTryhojBrJL3+PZusN8G4tqihg+9I7izX1x5JgnjsYuz03AM8xlbwHEMSu2pOxm+eQvgnO7FUkEklALUcQyVMqZoDeoo7qBqeI5wG9iNym34d+1tvDO+mFyukE6wXd9BQUWBS7UkTQFjCdk4ruGSSW5W9jFqnUT+U/sMt+xXdLsfQOlsjHURft0DVXrnA5/5PFOpVLVdSGULeuNNChZiQ9cSqmpzzbJg4q6mzdNetL41/8Bg25sBoS6knkxlML666F+fmWZhMCrWN1Aor9DCPtdFTlkjxB7M9ZaA7CPLAruQwrENqPEbmWN5xy7ScnBHmjjBMRKQ7KAi6PQRJJAPnzyHqGPnZQ8nKuZI3UrxjV1I3r55IxrBT6Jp9CabVe7dw6Wr8b7VviIBU3netqM/hBD2t9/317K3Vbb44wfXXQL8i9Q8xg1SQFamp26FCOmtNmUrDe/obLVMOmDrrjxQ83w1NPLnPX7O9//lHt4ASquJAIBfrucqrqRGikbNC3JXUAGl/1N5ByUGR6/dJO6qvkhdERVqiYqK3DobCOF3j+zzJtqJulzPUew7oFqCPjzfHyRM6zmd0ShVVG7ggfDCBTMPMRhoru/n4QlEnarmlmxkHufEfiHr78y0Nm+YUUoDFSWDKRJ7xadfYtTOcSNJvnKK77KsKmkvH2ZfdqPYywcCCzy/zLP+BJgJsNZp8yjGQnAiGPBRdvp6cfK4MLwv9Eb83eqiEldSa3BGFKbGucFd3CnBye1eiQjxa3NdoFufe+vFKPs20LU4npJes5O4WsZ7y/HcEKyPvo6JPAdj+osxKoblqZnfW3Ii/0V5e2a8Nqmd56vLBg9ia541KcLLLfwPgq03QRRO8kgwpmHq6mLdznPc8jd6nWW2hOGGlQQUXVgm9vcOeigNFj2oTk4zjBxNNRbqr9NBlTphSOsqj9Aq89wQ3KJY5Awm3eUWbX5Br0ezm5yxwvW+5NGvF0ffr5HosRov/R500hyXkBbM+ZvGthB9GOl/16ue18a6ecHU1t3lGlDgjlAgHlkIjTylJasUYnMqWODM79694rxrv3J2tiCr9E8DqbXyuadB9Xn7uu63fZDzibdZXBo5nKCvyR3iRtw3eXo2S1rN6me9bbFK2eCcJXxSPlyUGUIVCgGZGajR5jMHY8qpyhmz2Pfiq//h30TN5GgOjyG0hqdPrxWf5IG9llFuM8UZpt5ef4DCJDlzZdITUeZEUDB5g81EiaiN46hdC6Z0FIbu2LFSTatO78eZWKTzp1x7esXHMn8l6IoZvlCf4+RQw4dJP6ViMxz3WyOhSufEgXf2RhnGilSQEcmGJMo8B+siYv55oF09UsdQyX5r2uxy3s0i3t4t9NGX+omAJePuRfuqY0BXI0BymPvnxXlciiDSyOdYezImx08WCTD3xeI5/1KiANf2uGIvzGZtc2eaebnmClIzeyyJTO5Vxy1ZKtL3wyED5XlMGhpS9k1Hnn108xLQbW6JUPAqFqH+9IdwQOzX9JqwChGj2GKlNJqmW2RNFiVGfzASFccn4nu1OkVNZUNwLgIQyVv3mB1hgYaL0vUs0pS+XFPfOm24ltRfPOb+vRKZVj0R6cawypgxCi2enZ6q/W3eVVd8aerCweXBB+Ldpao8JZ4NXJ3IU9dioUhDj2MWVX24ErarDiwqNcMh6ZmjOjNZjhHnrXa0Fu5XrmGlYegmjmqVARU5nftLQUqPrP+zwDbf9eFtKQLbqrEbrJ4wwSEpYZD+jBL0Ej8UFnVbGl4fsndYhEP2P65YqpavH+/J4O/AONtHcLo4o8GU4sDjaQEyrzNlbbYagD0/qqTEBP7qcd5RB3+GCLQCUJ5qdsfuenVcr81+LnOsYBULXHnfgflvF6I/rLxCsALZhfqNTYo8TiOhj6pCNm9iJK3N5thAYjMaQWtvkHkAg0sU6VW1N8xbvvQvENaGOIvHPyKNLg3bsiw9+xpHPEeW3ObwlChgcmh88jHLwQ3xdJOwRWeUKKm/AiYMXcdhhvzU/cLJbkZaf+7ts+jDGuVKsXCccvsUMy04mQpdtkNtt7B/VMR9X/F5smGK9Cy3xMH7hXe1af0mNvrGdhriW0SeUZkYiqLLQUnTI+OSESsS7yImEs/JPVgHcihKr+MEwczXFDl9NmKIemBVhxcdZjEtN//7N0Ka7HFurMSGx0RY1/1LP/9qfKmQz6r3ZWqiO2CsrZu8FRBanO5+2S7bMR4Ah8UhTshJcyqJp4oTikncLMAnoqmwKQ5pFDw14lUTLUbD89ZsFUNMSHXtxoW9Sv41Gq+7kUv4fe0Zgfo3DMsLcH4iI7KumYJpI3aEUZe4GZkOqMKSwCDZ/3MRFTtoMVstqayUFlRmxXOZ6oqlIIev9U9gJv6tPiBsnIrPJSAlk24x6A23XjvJYmwncnxuHvlVGvGNBOjSNzl1hIiDfq8LrqsyAKFQtDmxNBUst65row5t7M4/gQistih7G4++CbO22WhuRwBlBKCdNUJST8lqlCoA9ZJEKl5Aq0dcATtCyB1UtkfBXpMRiOWi0ejc766dysSUy8sXdSpbNGkTk+XSgEFcqnJhDS5JDQOg+o/Bpw4A1WT0qgmo48lNI6WI0AcVVAfHCHTWyBAer1DAn80MM3OFIO059GE5YXu5brhu5sHg0FQx2cWzA993IgGhUXW7+NIvJ164iIxBqOauxOfKWZP8z85SeVGtnFn0lavQFjxLkSvIdO3Cr6ktSihbkXLzndTquvpo6Kd1exT8Ta7Ch51snDh6/84Vtsxu4xwyZF4N0HzjxyVsHxn1rJWm66YxiAfEx/4yeHjl5GNB0a5Xg4aMM4op3WO2e1Wx4IDsQGwLv43spDEOLxfRmArPaG3zW1xPO/9UmF9bppSKDkHItNaR+OIOXfhgkf/CILjU/FfSd6ksjNFZeSted8DCS2bv74rTznHqW/rjb4SHby6OuOOfGb6B0UYMXiwmxV2ZWpvTdHz2gU+Q7l1wystiF6XKbH50gozLzk27u7uyXSD62I7HpoVFXJeF6c7q8IQaeoZt+0ArUX3WT1bsnBZP2unAd74OU0RfiTLndf1LbLFP64uJGK2bCaTRVuH5ZneZOKSRNsvfUZ+CJD5gGC+q4hqsCZbv1Hk8TzrOB/horMe+UBIoUP0mn602r4usFHpEwYeGgSlQ2j9EaAHZyFdu72WqQz7UMXuLGhFjHiS9oys1JcjKZOL7YCYu5BzT7qo/zi58Vee+1iyTX2+PlWdkjaUU2/YVv4vWUKk2Cglv+Kotcy6NHZH9qufJyHL0bDoHsxmPfBlt2IEgMY3jAKOAg87QoQHDo7XHHzRYfUMvm8bNnNhDXbSRj4Re7OhARhei8VAg5i8caWFD9agq7+8EFtahxHaN8MPKFqYsyli1hyLKfP3MBj1MnulQcSmMaw1eB3dkf7B7zj+f5V56QJ7JvWPioOHTiJ+NZ5G/stToPzrVsmrS8cIP6vKAL4hyDHHO3F+QyuiM1HrB0NlMHkfkLuaes4/q4aDRK0XZ0qxYTOvI7RSlQ2cztqy70cffZdHfeTkoxFD9WRbZ5ciHz7ML3l4IdHCpjsMFAwdjy7ImHNQxNCOU/dRqyF28HXYl1AHJPwgS+i/h7Uvj8MabQT2cwlcTf+YLG9VRGzQDezH6/wicTvLSpjZvKTCxZDYeFRNEV/X3caqF8OWCgKUMNqpJHoZ+kzmB1CBbEj3eIrpYIO3y+v3cJr6H5xHgxOaCJXp3fV82s+JiCExIzqfLYVyoBSn2BYtwvo/3dG229K/nGkAAF5utqu5f6lH66jui7oXbyPdfBL9Y3ywKHfQS8zBbR38R+F9RPfbaH4JKJfkhbeoygW79dSrWGxMtjEbowlC82vjXb1JGdp2JJPGiqOp36f6VCPc+u3ezDt4WeT5vYtkZwQSmY0mFIXHEr3P2z1G2QbAcTxg2hb2EWiI+bmM4tmu1izTuArl4kwbg5mHsTPQbft8mx5GPy6L1abb+3I9EGOSOZEfk0g99QE4TdjwvvWZ09TdY/pVCjE68Nqot3fESdGq2FJfT4qaZPDekVdpJUkP76KhK9jkj2oScz3Pa0b9ScwIiPEW0GQ/lqli5kb+vX6CnnXrZM6thyJPVbVpgtuKpbjA74Vdmj/ZMg3vYpfwTSXi4QXHVKEVYCrs7mSFS4aunXHQTJ9TtW02lDk+6FuKSDvGkjGdN+inpB2uOeQc+CEvPrRcceTECjoSPGp09Ou1kwaxEsv46xdwo0U4AiDUqx+NYEWsb8xJI3hx9ohx8+/lWQH7Vmp4rqo28WIrH5cVdw4rUBx/LyHsxaVHaRkPfAGweoPW4VuT4ofPuok2RPj6TgfVOZZd3S7f3Upz03CKBw1JrsLzHZt27ZiRX3vfw+qJQdWqwp3HvEwd9TW/R1JQT2dI7+egq3rnSmrpqu+mdY7WuHFMTeG8eGQjU1glc5SbSVrgem1uqQem3WYz4It49bDOw4z0lMTL4qZm66TMR/53Km2+mincEEAh6n2utr1uIdgAAFB9sFvGybMGhuoXiQJiqey9aycCLKKl7FLhCMpdg7fCVG6L7y7HzqlU9RbNVqGTmKaaObfXIemH+UQkLImCm6xqMmKPhwhbKQ/D4pbCSatC+K+9PzYLW/v5A89qrhcr8XzhfS24+YB+Yx3EoBpNzXZ6/sQd1rhPExxVfiD5fKYpnRTs/WqbVkxVkGE/R52RpILkq6sKByMpp5H2Ma1hzy/l6kP9xZMbUh+1r3EQf2495CCHtDerPAyzsY3E6vMLkPD7E61qMR9FETtl4APKQxTpJBKarFAUbE8AvZjADN3SexA81h7pO1WMWUnnMhc+xfviv+Wqn8G2rMKx5j6YBDbPWadea+OqLZpPfusLJBg5tdWcfjwn7bN7eFGn3kq1g2x/Dep63Y5TB5gZ6ly4T0+bCKd5itAJQ2JY/atJTth1qotzUIhnKvC1rh7l7mt7CORnQ3WL1DDBfxX/bXCU3hw414v04Gdd8x6iXC3T+8lO2A+QEwQt1jEvUe3IABWxuaDSB16d+5r/0Zv+xBhJrZ+6r4es0Xot512UzmYrNlul+A70NOf8aBNWR4b8wazha9AUC1e5Xek0TRz5VcUvEJsny+/aRqgzoLdZCe7Eis9uvMasWntPFq32zfJFRbdXC98OHe9/xryYrmZBB3kh3lPKWCDn4Pq1lCsm3rv9APYXp/NtDzc2mi7CLAkFPv9IRw/Dgbc1nygcrvZkkL8xlduQkEH+aho4thkaOZ1ZSSpLE4GSVe/25Ji9oPycJ7hYhETF/mvIsEGwiERnTg6i7+X69eub3E6ppDAX+z2yBgFLePX5nuUBXZLU27IlaTxPKQn8q1W9ohYGHIOWnWQATn2wawai91Z6rWNzmmsCn+muMcjwgS19aR+pV70LRLSkS3uABK0mVi8gbNDhyPrivLCvNeDx+a26qN2LuYzgLpdH7wZy5XwKuJPFSGDD7c1QISfK0xa6tRWE48XSS9GAf2Rv55PtyJ2W3Cov97Y/6T/zn1kedLIU6OIVN8Iw1Gfi2b1Ws5Rup6jphQX4jKB3lOgvXvwfjwnWU8rHdYloMN2NULO3V/6S/7XmJL1j17Pip0yqpbvTZozGKxEoMu8xeguvmuk1iCPHlTrRtOZMzy9TINksE1PENgEAAc36WrBue78mv57D5t/orjREOjA+eFs7W1SA/yIJWhLb0r26wX29ZEnLrtFoQN6W/xm+vvDDJb8y7jMUIQMtYIoZy25QinQbh98DsYJhKgW239ILKNVWOxCjPX6by3f6muqUlMnuV7WAG2YwaNu8q6BY43E6pj8x5iw6idvKugS9xj7/UE9yxw2Dmk0k8ojiXgMdkrFEMdAWT+LSRbU7ohAcBsnnWrFtU21ht7+fTfLhJp6GljR/Kq+Dvs7PIi2TECNaJqrW2peUmmPEnH4NhlfWx+kQX4bSP+2HHmx/XFCNzVjlWQBA7Mgh962cIYY+x/AW3JJV1lztDpdQwM0f5BIRwICDSxCVxe1lI4WnHPuHlkAEC8oxVJ3h4yuodVuzbJH36c00/FWF/lpO8erGDlHgIc8ysbddZqyLs4oI99NNooZ7pIfG/CelrtPE2aIoaLw7oHx6wmOafFPmhnhttwzANiyZUvjN/npZNd584WnPQwuMPbv7ytnJXAMN1Q+1jKB12pVb9eEXG6il5/V79Zz7Qj0lmsh+Am6hWObvsRaL3XO4QVmtTwTfoPJhawq8Sz/nrsJf3ZaRTYIi4g7unwv1QKP1Ezljhen/fz/OLKcH44BEzHTZ2mbtG9eZ8nckWWRL/x/4M/Iu8adTbXJP1dX5rlsFjdc/+SJBhD0+7Axx5/qxs3Rp9BLpyvcR2moG498ROWHcfFAa0P+0nZJxztda6jS8jHX53xLt9eklxhw25hga1JTP+QvMk/Hi227f056X1EfW4S0W5GGyY/lhcYJ7zr/AITkhnDqoWjxxxj4plXy8sdX+Iq+WqgPTAiWKynGotM4A1pUbuVn8/uNnEo0CamJAKDRFaKL+CnbUyRNJTrw5ejXXvOT7Qv8DaWePJ5PnB1kTCnzilqVMc3TEPG0gduZX+WUX4fyM7qUHsxwSQingIeEFqq3NPwHhzqRKPuHKfMbe7jfgauN2WzmLQDrr8Ui5Os8ALkNehVYsZ8XdnXuygZDwtirRgLWZMQt7bp4cqAVP3kI24RoE+GmitDuajyBiR0fhfv85qBxKRx3s/gIBa+okKFEVK/lNMwPYj0fqqijJWq5a4F2vzOEVup036Har3WmQOk0VbD9O+IYZHajEI+DcXgwJkvM9kw5WvWmLNW1AirUwdOhI66FkamGlLOS2UwXfpT7qAtX1K2g2fUENnzId6kXwp8Dpq4lgISHUOmSnpbv82gN+lXwEFF9V6JSl8uJxnCxDHPPu3uVwnuNr172E1J+8ihuXzhxpBeC8Kcezcc3GfYKASwHh+vRYBFz+yfvNlupEBrLzxsS7FPy9fzqv+QsLvQB3maPw7hISdGiG1TUeuN7+Y3mqzWyvgM+5iylUNAI0FRe/2tPH8/xQP8Yjn8ZN+0KC6z7Zovqzwu4j040nio+6FCHD/yF1Gw8L14DbWfvCRDkjTxfNKxOMSSVIkbSxSbtKrghyXnpC9SOIGvWLaooDf/OcDUej1zg8oQ/WZ2f1ermENIeJ8jtgzFtTiIZAr+Bx1J9Md6AXc7NK5gNY147mHhee0zovARGDgZB4GcJdfW+S6skux4SGzNlN9bALW5mMsEdL1INueAbIe3ahxHqVovsOYiD+ndQBfN0eiefGD8s6pUISic9HoB+5jOCWPUuQkqF0bKQzRaa73861/hdWWGlUPSJcc3v44MDV4W5/o4LrIAX2I7J6YMH/rEgW8omEuS4EvTQcDZwdMmJK14QhSBLmJgvzSz7yHs+SZh+LyrdppGSgb9ioo7oRKIikOQ+p2FoiPCkDBD9Z4c5s6auBSmm8+yF0spCQLuc30oO31tS1lDVwAx4RwoTFWq45c75c9oGZbucq7AJM2umWgzQBEF4KT7kb1zX70wWBukIt2C7mT4mA9hUFsR1RJHaoOTOdhRFtLWA77quxPGVN61TALsFcP6DXSsgg+mA/IyEAXU11ierofqd7GzFD1W1aoQU5spCIFWIycBqZzoPys9tbx3od+qGdVYt4NTe0Ygbco/HfbqjfryeKXNbr9dT9yZBWde15pj64KIzfq8aaqTn8GmVNYK2I+PRapikUSv/V4m2M8bUUnp62EAL8KsvoDgfT9fT6bEEpekcJQ7PM7kL4fYR2bezpUGKspwTtM1du7R0t6LPTlc3Elilz2dCagx6zg+VKvkf1rsoPFCUQZpkaKHehQS3bXpVSQ2G0x4Sq5gNyxtNoZj0R5B4fxrQ58TEk0LViWOgIz3qaU/LI7HlVVdb1WsMXgZ37hWxEYHD/Oc8sz/C//8XlUM2tz4GdZq6SBIvK8yz/0j72Deo4FmaVa+RY76uhK47709np3caH6hV7GuRSeyiitKB4p7K49BWW0JpSZ70wuEKkrmcMcTrWyTorrqBkoGWJvs8ovy0TUB5GTQ9yVJM3HrRTIkGHV6wUtzU++bWiw5JYMzxjKoSDBbxBfEgUFqq3aQDoWew/5ro1baaWQaMCQdzPr7n8P6GvkFbNDtGJ55wZ6N7shZBb294rt5/AD794zaWCWORNB2tgWi5DhXarxQGbduKgFkbkFQB0vt1rB0zixDYe+D8mvyMVQ5JxdeZnUdPWN+GHuAagzifkTSrTgeaUKgvPOICI0/39yeFLZ8QumhTaBvXGHh7+Gi2jmKpCG8BmjXU9fHB8dLms2JLkLbuvd5+Lgn0E/s4GeOpRkUillKLkAEbUh+dE/Ytct3qUPAjP3+fdajEwZPTWgSToKAHLpmJP3AZ0q5Z6WmKLX3bE5JvAXCV+J+tGwIJGjJwmh1IyO+C7Y+X5J3GdLQ09q3W4lIruWBrZUHizZofZgi7tGCEccKZYMVDyTAJ7GLqRX6iRC4CETSZ/pSalHYCAVmcWg/wIzu63s8/t0vR/SvYP+RsFncoFJXo1UlaZ4KyG3KE0hdW1mtpTAvwuwsnauA6oJhH4PtsTFEsD3J4+KulBKEoyDa6m57w837yZgQDoo7cAqJqH8x+byLRKhQVgNXBFlXziVjl8KdgEpdlIpeHMR1DpMYFR4PROtp0USko/zAUZ+pEoDIESHVLx7erhB/9ffgCbaLVDlTgr1Qf6toucUzrmvVlTROW2///cUKUNFZ/Go6/Q8HUNfFa38x5sNGvkBW82HcX2nShsRLvyoG/V0ezvG92fjIbsJg8g4IE4M9mHhMts1DnFXVXVJgyyaqdnm6coFz1JlS1lkcgJYcdUANKfoZaxw0mX9LVy9q8zYd/2X7JuUKeAHoG++KT0mFDXPswf6LMDbAoO6s0oBsA9fP0U2ZYasqzVGiSMSn5iqtzC5SymoGGAvdwpwpLm4zcMm6dbygE/05C82xNgY/wo4eapcrgbwatR6zK4NSOLLEXElGSQWa/J9VJVMNUgJXFpyVmWCiP02K7mxohbFWjuCd6aWwMA3qOf9cIQ3kWatHD0XmJm6cjDkYWC2+REbbVEZ6cRr9qxYdKEnQOWlRSj2CK7HI6Ycbus9+xSJK+ulxLnF3TEEmdUyxXRMiYodOlgaRxtjL1ktzocvs5LtlFIc44zazbSoCcLEYF+DGvGap2H861peDqfJ2nvqzhUCGooauJCQmIN21VH5yoWgnk5n72qFzIACcST1sSREQAAfiQuQ7j9dgJPKmbI+qyEot9UvuNP8iFFR8j/t+eTa2VAoXU2C2EFBkSTbFKZotUJaK77rZPOZQJ2KnPPAZK5oc5WoDMu4fzS1US1Ahcs3UYU8rwa9b5ZpUfolHj74m5EHKAJZZ64xM+Pcz3SZnTfrBgW96CEMnFL3obeQRN+YNaqonGwNZnN4cgltxso9pAIyfYQs28tIR9r3fR8E8+z6vNS9TWlb6AZrwQ7i4YA0rNQ8ziUTOQLTXVHGJciCM05sZxhj36xYrGbzVAUG14Z+bQLhbNxT81X57wwfp6u/DIEkbaFEKrqxxCtRT+3WTZWq+KTM7oZYFWuFYNp80rundq4n/BGVxoCzZFVWsCIT+34v0XOS81UNGufJpiQXUFOB+n++0sY8yV4uc8xidABc67hbXj29WwW3kH1aKpDH0jbHR9osRzrxbHF7MhsGWLrN/Y5MVCn5iFwzr3Mh07ZPk8YGvcIGKN686HEIklm56FsNwKQNsj3+dOnbn62JAzCfOcbf8SUlDVg1+9Iay1ZZ4lv+B+iOlUguAnU0cv06N4fmG/arWel8D6A2b3s5t0S5dnS2EORAH7iopkOR28ZD8OQId9yqsyg6ZCPef5Al1V/C3J8J8ahGv9f+60OMTmapmYNLGgWVABxNQ7qP1KF9BArxHD85NPwDingvlGexwqgBGmZuQ4cF93eSAxuqrGlvouWBddXKbZhcSRogc0eYXTM5gwT2kxX5hJTuvVC+fmLrL6zmlwUGT5xyXCvHOD5x6RC+ewM6e+VU2phpc5XaULoY1tWPM3+8jZeJ+aRFGXGTt+UjyJYwkYykqLjJmR6nSnVU3tZ4+bVwPaw0pBFQGHpxz/Zz7mp9LKAKSkOp4YnU+qphj98W0EXbQeQuNv5DqGTYQDmj5/LwvuyC6s9fRJQCPfWqFdoExmyWybJaL9deOml+9KF7Yjyzp29b5CkdAKyCHaPlurKYfn2znM90TYqpc2T8/Okgm+7yRW9Cp5kzoXzNV5oSDYTvdTxzAI/Qvt8OTayl6aH1SFIpzqVu5+z4LRK3tEBcZFyKZ4NFvUOdZ2qkI1Gn3p63oV4hn7bsxPfHVJUtzIfRrOenVXLgrwYx7ZldQO741csFGO0WoKwjIfvxVAI0c7tIEYU+YHGXJwrULJG94uAzDcDcGDOHm3NM3hYt/LeSxW71tAhqKN49aX9x72KgEzZJg5cit+DbKhfRwHS8q4Rvr/t2ikYnmS5UC505f6QEoRPNKRUDkFn3RJoxgGT1NHd1R+16BnJlvxcgn4d2AwIpxnnWqsTCq0AXkB+0GX3XIdRISW4H7wdi2n6BERyhsVndb6CGj9OA+6kvo9NO0FVU+1UdlOqDTQJF6Oy0xyGQgxsvoQuoHxkUQmcA+A3IbDTwIdCF9fgReQrXYtuMH2pXR8PZPw57y2H9clpR9mkUiN+i66BP+kkiouytLzIMsXjvAMgfUsfxPgmTZ+8St5z+tw8ss3YiAbcsAAO8LBp+tdXEIhBUVXkLmC7A3LYsF/mEx1pr9WP7W8YtgZmkxGUOgd7o+5dyeF8fWdeoC8P+ET3za/eIBzEbbPNs5EjY72+LnoGIZWPVzRCj5bxd4NmhB1YrdXtupsxGWjvYmQ70Ub3Vwzd71USLJqN+GetlEwJU/g2m5yxFsSAkMH+VRxSfHEI7bAgWOfqqWo2EuyHda0a8Te3FYrDCvj80yzZ2BrAOiyilNXKrw4nLu/llsC/76Mbi5IvcLPJn2jUr+z5TSDe7fuFloBJSWQAhV6w5nLaHXls+9pvsBN2TSqXAn2YSC7thSuZ0cEVS1xoXxGY5J+eQG3oLVfrI61IBLGUwmXamPz6q+MxNOmIvOF6GPlW50e0C1j8hyWi1B4nv+RS2CdcN27IomimdqoRlq8fe57ckSr/OukeCy3Do8Pg5G1HgfBUGvFCIeDydzq+0NaCjKgEEUunzgLHKoAAWdx5v/8eHNvdnGHWkOgxL5YjLmoGf4ZuFGII2QR/g0JCFhNq56aSnc5d5lvICQ31PMa+HOWRyic+Zr7S3oVndXDU2EZ1JRWPDIOuz2G+nVR4TR6GhdHeLa3AmjsXXlz6rHtoA0G1DxSfbdDiL3yO/x5cqgM04qRlqL2qiUyzvTpHr214/j/lf1hYPITcMd/LvDvU7Qc3/wCQGd/xom8KzazOk+UJhrNgNkVXqHwcKkVYmaXcOt6/FV1q+cdsyOk8NsiU2msIBMWk0961VyXuwAGn7DE2FOHP0AYuU20welRCGGQrq5ClxLKj8KcsXyDyZCzi+l8mRIN/A3zn54wMr7eDEzAonEuTJYc1UN5uHXPgsw8sz82eaQ+BJbDVYo+EsrHfNn8s/uhTJOx4YRCIjLDTBjElLfExKT5nAJvThVwtZm0rb6l6fLwVmoqseRHrpr/QlJbks6X5YKPZexjndqhvxRUjyRNIEbyk8lfIYb5Qd6JUdS3vw/If+1AeICJZC6c6CnJApDn4CgyyL2x43M+/L7sMYdU6lOOREFWYiDuZVatfENZK8RHOl8o3oYYcjrbwpI/p+L6jQjBuSx6nqmeltJKJDGmwsVCQJjkOpr6YZkdojNxKzme1i0P55y93GVO9AVngRGjQ0CYRHmhSUPAnLbGTFyDiP5jNB+JYNHYtfwfG/2goNV4rvo7szysbPHZdKwPBYnhtI5sEU4h4+P7b6oIyIITurfGluvO4I3stUdnuwiae0b7bI/yCQGM05qY0j9ZHAzVo/LvF6u1aFWaVlK4GUYuZVYOsD42nmB8+89r+ttR00swX+DEM9b44rGGN09dH8GdVvi4EUf/OoE1yaB7qI+SvkUGaMQk9tOFP/w4ABdh8ADvMhxM+tr4Brd8yTwRtFDHfHitjj7Zh9MPTiDySlaGjq1fttfvZM5eB9tg3cJmC1QC5rSH2/5QBIODAOV6h+0KK/2sKNgFDmJgeyrJHkeBfhBStFoMAKn2TVOZBMGnF30hZALS+mrMXdrTddrulEJjozdMTBJW+p+zWHtnUzIUicJ7KtoAQHYGATS32Gf2G015IDiQ3/A5kGIouDhlceBREov2APutQb4ruJn0CiiQ3Pm19x2zNASkW0vpxAyIE6EFC/9dqthiGKB4GWItr4GciBiKm4cMGkWUxhOrxL0qq9/RB8aCV9WWxrInwCwkmptvaNGGJ0qBTv1kKPI8B5iuKAUvoFgsjCpbzjYk+G97FyzcT4f4/hXWE3j/VRztbemymOgXBo36RDKlMXx+P9GQXjrnH06/pCWJ+6JWCe40HiKBmUyIhu5Vg5Qt/hHOus7DZnmdNFA5wgpeSSXX+9YkOQkTGr3WjADrBwkKgLLBHuCNYceDHgfJoQQRKLXStmN2EPMR2/L+thX/gx9sbpEjnJ7cFe6DeWQvMduvmU1GQoaWxxjqD7J3QjWyatAmy1djgfdh81MOnd5dftpAriVbEgmDvqAv4O/Bu7/hNCtSWyBfxXW3VCGa3XfGDZU1edvT10unmJBdUhoLAAA=";
"use strict";
/* Veyra — front-end prototype.
   No backend and no real AI: chat replies, spelling checks and plans are
   produced by simple scripted logic so the screens can be clicked through. */
// ---------------------------------------------------------------- helpers
const DAY = 86400000;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WD_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function esc(s) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return s.replace(/[&<>"']/g, c => map[c]);
}
let uidN = 0;
const uid = (p = 'id') => `${p}${(uidN++).toString(36)}${Math.random().toString(36).slice(2, 6)}`;
const sod = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
const addDays = (d, n) => { const x = sod(d); x.setDate(x.getDate() + n); return x; };
const today = () => sod(new Date());
const isoDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const parseIso = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const fmt = (d) => `${MONTHS[d.getMonth()]} ${d.getDate()}`;
const fmtLong = (d) => `${WD_LONG[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
const daysUntil = (d) => Math.round((sod(d).getTime() - today().getTime()) / DAY);
const words = (t) => (t.trim() ? t.trim().split(/\s+/).length : 0);
const num = (n) => n.toLocaleString('en-AU');
const pct = (x) => Math.round(x * 100);
const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
const hm = (mins) => {
    const m = Math.max(0, Math.round(mins / 5) * 5);
    const h = Math.floor(m / 60);
    return h ? `${h}h ${m % 60 ? (m % 60) + 'm' : ''}`.trim() : `${m}m`;
};
const ck = (text, done = false, from) => ({ id: uid('c'), text, done, from });
function dueLabel(a) {
    const n = daysUntil(a.due);
    if (n < 0)
        return 'Finished';
    if (n === 0)
        return 'Due today';
    if (n === 1)
        return 'Due tomorrow';
    return `Due ${fmt(a.due)}`;
}
function dueIn(a) {
    const n = daysUntil(a.due);
    if (n < 0)
        return `${plural(-n, 'day')} ago`;
    if (n === 0)
        return 'today';
    return `in ${plural(n, 'day')}`;
}
// ---------------------------------------------------------------- icons
const ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
    file: '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>',
    flask: '<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7.5 15h9"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/><path d="M8 7h7"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    upload: '<path d="M12 15V4M7 9l5-5 5 5"/><path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>',
    check: '<path d="M5 12.5 10 17 19 7"/>',
    arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    chevR: '<path d="M9 6l6 6-6 6"/>',
    chevD: '<path d="M6 9l6 6 6-6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6z"/>',
    send: '<path d="M4 12 20 4l-4 16-4-7z"/><path d="M12 13l8-9"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.8 2-2 0-1.4-1-1.6-1-3 0-1.1.9-2 2-2h2a4 4 0 0 0 4-4c0-3.9-4-7-9-7z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    logout: '<path d="M15 4h4v16h-4"/><path d="M10 8l-4 4 4 4M6 12h10"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    cards: '<rect x="3" y="7" width="14" height="13" rx="2"/><path d="M7 4h12a2 2 0 0 1 2 2v11"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5V14"/><path d="M12 17.2v.1"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.1"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
    flame: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8"/>',
};
const icon = (n, cls = '') => { var _a; return `<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${(_a = ICONS[n]) !== null && _a !== void 0 ? _a : ''}</svg>`; };
const KIND_ICON = { essay: 'book', report: 'chart', presentation: 'layers', exam: 'flask' };
const KIND_LABEL = { essay: 'Essay', report: 'Report', presentation: 'Presentation', exam: 'Exam' };
const logo = (cls = '') => `<svg class="logo ${cls}" viewBox="0 0 40 36" aria-hidden="true"><path class="l1" d="M1 2h12l7 17 7-17h12L20 35z"/><path class="l2" d="M20 19l7-17h12L20 35z"/></svg>`;
const wordmark = (cls = '') => `<span class="brand ${cls}">${logo()}<span>VEYRA</span></span>`;
function mountains(variant = 'dusk') {
    const p = {
        dusk: ['#1A2550', '#3E4C8A', '#C98A6B', '#F2C29A', '#52608F', '#2E3A68', '#18213F', '#0C1229'],
        mist: ['#7FA3C9', '#B9CFE3', '#E8EEF3', '#F6F2EA', '#8DA6BF', '#5F7C99', '#3E5A74', '#22394E'],
        night: ['#0B1430', '#1C2B57', '#3F5592', '#7C8FC4', '#33467A', '#24345F', '#16213F', '#0A1126'],
    };
    const c = p[variant];
    const g = `g${variant}`;
    return `<svg class="mtn" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset=".45" stop-color="${c[1]}"/><stop offset=".78" stop-color="${c[2]}"/><stop offset="1" stop-color="${c[3]}"/></linearGradient>
  <linearGradient id="${g}h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[3]}" stop-opacity=".0"/><stop offset="1" stop-color="${c[3]}" stop-opacity=".55"/></linearGradient></defs>
  <rect width="800" height="420" fill="url(#${g})"/>
  <circle cx="590" cy="250" r="46" fill="${c[3]}" opacity=".55"/>
  <path d="M0 250 70 200 120 225 210 150 260 180 330 120 400 190 470 160 540 205 610 140 690 195 760 165 800 185V420H0z" fill="${c[4]}" opacity=".55"/>
  <path d="M0 250 70 200 120 225 210 150 260 180 330 120 400 190 470 160 540 205 610 140 690 195 760 165 800 185V420H0z" fill="url(#${g}h)"/>
  <path d="M0 300 90 240 160 275 250 215 330 265 420 220 500 270 590 225 680 280 800 235V420H0z" fill="${c[5]}"/>
  <path d="M0 350 110 300 200 330 300 290 400 335 500 300 610 345 720 310 800 330V420H0z" fill="${c[6]}"/>
  <path d="M0 395 140 365 260 385 380 360 520 390 660 368 800 385V420H0z" fill="${c[7]}"/>
</svg>`;
}
function ring(value, size = 120, stroke = 10, label = '') {
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const off = c * (1 - Math.max(0, Math.min(1, value)));
    return `<div class="ring" data-v="${Math.max(0, Math.min(1, value))}" data-c="${c.toFixed(2)}" style="width:${size}px;height:${size}px">
    <svg viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-bg" stroke-width="${stroke}" fill="none"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-fg" stroke-width="${stroke}" fill="none" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg>
    <div class="ring-t"><b>${pct(value)}%</b>${label ? `<small>${label}</small>` : ''}</div></div>`;
}
// Fill a ring from one value to another, counting the number up alongside it.
const ringMemo = new Map();
function animateRing(el, from) {
    const to = Number(el.dataset.v);
    const c = Number(el.dataset.c);
    const fg = el.querySelector('.ring-fg');
    const label = el.querySelector('.ring-t b');
    if (!fg || !label || Number.isNaN(to))
        return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || Math.abs(to - from) < 0.005)
        return;
    const dur = 1100 + Math.abs(to - from) * 500;
    fg.style.transition = 'none';
    fg.setAttribute('stroke-dashoffset', (c * (1 - from)).toFixed(1));
    void fg.getBoundingClientRect();
    fg.style.transition = `stroke-dashoffset ${dur}ms cubic-bezier(.22, .8, .24, 1)`;
    fg.setAttribute('stroke-dashoffset', (c * (1 - to)).toFixed(1));
    const start = performance.now();
    const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        label.textContent = `${Math.round((from + (to - from) * e) * 100)}%`;
        if (p < 1)
            requestAnimationFrame(tick);
    };
    label.textContent = `${Math.round(from * 100)}%`;
    requestAnimationFrame(tick);
}
/** Animates every visible ring from what it last showed (or from empty the first time). */
const STREAK = 6; // days in a row with study (demo value)
let pageEnter = true; // set when a page is opened, so its numbers, rings and bars animate in from zero
function animateRings() {
    const r = state.route;
    app.querySelectorAll('.ring').forEach((el, i) => {
        var _a, _b, _c;
        if (el.closest('.jv'))
            return; // How it works previews animate when their step opens
        const key = `${r.name}:${(_a = r.id) !== null && _a !== void 0 ? _a : ''}:${(_b = r.sec) !== null && _b !== void 0 ? _b : ''}:${i}`;
        animateRing(el, pageEnter ? 0 : ((_c = ringMemo.get(key)) !== null && _c !== void 0 ? _c : 0));
        ringMemo.set(key, Number(el.dataset.v));
    });
}
/** On opening the dashboard or Progress page: count numbers up, slide bars across and grow the weekly chart. */
const COUNT_SEL = '.stat b, .pct, .pg-stats b, .subj b, .pl-p, .acard-p > span, .a-prog b, .due-big span, .wk-v';
function animatePageIn() {
    if (!['dashboard', 'progress', 'assessments', 'exams'].includes(state.route.name))
        return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        return;
    const root = app.querySelector('.main');
    if (!root)
        return;
    // bars slide from empty to their value, one after another
    root.querySelectorAll('.bar i').forEach((el, n) => {
        const w = el.style.width;
        el.style.transition = 'none';
        el.style.width = '0%';
        void el.offsetWidth;
        el.style.transition = `width 1.1s cubic-bezier(.22, .8, .24, 1) ${0.15 + n * 0.06}s`;
        el.style.width = w;
    });
    // weekly chart columns grow up
    root.querySelectorAll('.wk-b').forEach((el, n) => {
        const h = el.style.height;
        el.style.transition = 'none';
        el.style.height = '0%';
        void el.offsetHeight;
        el.style.transition = `height .9s cubic-bezier(.22, .8, .24, 1) ${0.2 + n * 0.07}s`;
        el.style.height = h;
    });
    // numbers count up from zero
    root.querySelectorAll(COUNT_SEL).forEach(el => {
        var _a;
        if (el.closest('.ring'))
            return;
        const m = ((_a = el.textContent) !== null && _a !== void 0 ? _a : '').trim().match(/^(\d+)(.*)$/);
        if (!m)
            return;
        const target = Number(m[1]);
        const suffix = m[2];
        const start = performance.now();
        const dur = 1100;
        const tick = (t) => {
            const p = Math.min(1, (t - start) / dur);
            el.textContent = `${Math.round(target * (1 - Math.pow(1 - p, 3)))}${suffix}`;
            if (p < 1)
                requestAnimationFrame(tick);
        };
        el.textContent = `0${suffix}`;
        requestAnimationFrame(tick);
    });
}
const bar = (v, cls = '') => `<span class="bar ${cls}"><i style="width:${pct(v)}%"></i></span>`;
// ---------------------------------------------------------------- plain-English task briefs
const typeOf = (a) => { var _a; return (_a = a.typeLabel) !== null && _a !== void 0 ? _a : KIND_LABEL[a.kind]; };
const metaOf = (a) => { var _a, _b; return (_a = a.meta) !== null && _a !== void 0 ? _a : (a.kind === 'exam' ? ((_b = a.duration) !== null && _b !== void 0 ? _b : 'Exam') : `${num(a.wordLimit)} words`); };
// The real Year 10 PDHPE task (Assessment 5, The Next Chapter), used as Veyra's worked example.
const PDHPE_TASK = 'Review your ‘Year 10 Career Profile Report’ and consider your ideal future vocation - ten years from now. Investigate the current job market using Seek or JobJump, and find a suitable position that aligns with your profile. Screenshot and link the job advertisement. Explain why the advertised position would be suitable for you in the future, with specific reference to your ‘Career Profile Report’. (150 words) Imagine the year is 2036, and you are applying for the position selected in Part A. Construct an application including a Cover Letter (max 1 page) and a Curriculum Vitae/Résumé (max two pages). Construct a one-minute video application indicating your suitability for the position.';
const PDHPE_BRIEF = {
    question: 'Pretend it’s 2036 and apply for your dream job. Show why you’d be a great fit.',
    facts: [['Type', 'Job application, 3 parts'], ['Marks', '25 (A 5 · B 10 · C 10)'], ['Weighting', '60% of Semester 2'], ['Submit', 'A & B on Turnitin · C as a Canvas upload']],
    steps: [
        ['Find your future job (Part A)', 'Re-read your Year 10 Career Profile Report and pick a job you’d want in ten years. Find a real ad for it on Seek or JobJump, then screenshot it and copy the link.'],
        ['Explain why it suits you (Part A, 150 words)', 'Link the job to specific results in your Career Profile Report: your interests, skills and values. Describe what the job involves using details from the ad.'],
        ['Write a cover letter (Part B, max 1 page)', 'Pretend you already have all the right qualifications. Tell the employer why you’re the best person for this exact job, in a professional tone.'],
        ['Build your CV (Part B, max 2 pages)', 'Make up realistic qualifications, work history, experience and two references. A Canva or JobJump template makes this easier.'],
        ['Record a one-minute video (Part C)', 'Introduce yourself, cover your qualifications, experience and personal qualities, then finish with a confident summary. Keep it between 50 and 65 seconds.'],
    ],
    decode: [
        ['ideal future vocation', 'The job you’d most like to have one day.'],
        ['Investigate the current job market', 'Search real job sites to see what jobs are advertised right now.'],
        ['aligns with your profile', 'Matches the interests, skills and values in your Career Profile Report.'],
        ['Explain', 'Say why and how, not just what. Show the link between you and the job.'],
        ['with specific reference to', 'Name actual results from the report, not general statements.'],
        ['Construct', 'Make or put together yourself.'],
        ['Curriculum Vitae/Résumé', 'A CV: a summary of your qualifications, work history, skills and references.'],
        ['indicating your suitability for the position', 'Showing why you’d be good at this particular job.'],
    ],
};
function briefFor(a) {
    var _a;
    if (a.brief)
        return a.brief;
    if (a.id === 'pdhpe')
        return PDHPE_BRIEF;
    const facts = [['Type', typeOf(a)]];
    if (a.kind === 'exam')
        facts.push(['Length', (_a = a.duration) !== null && _a !== void 0 ? _a : 'See notification']);
    else if (a.wordLimit)
        facts.push(['Length', `${num(a.wordLimit)} words`]);
    return { question: a.plain, facts, steps: a.sections.map(sc => [sc.title, sc.purpose]), decode: [] };
}
/** The teacher's original wording with the confusing phrases marked so they can be explained. */
function decodeHtml(text, decode, active, action) {
    let html = esc(text);
    decode.forEach(([phrase], i) => {
        const e = esc(phrase);
        html = html.replace(e, `<button class="dc-term${i === active ? ' on' : ''}" data-action="${action}" data-v="${i}">${e}</button>`);
    });
    return html;
}
const ATLAS = 'Atlas';
const atlas = (cls = '') => `<img class="atlas ${cls}" src="${ATLAS_SRC}" alt="" aria-hidden="true">`;
// ---------------------------------------------------------------- seed data
function makeSection(title, purpose, limit, items, text = '', minutes = 40) {
    return { id: uid('s'), title, purpose, limit, text, notes: '', checklist: items, complete: false, minutes, ignored: [] };
}
function seed() {
    const t = today();
    const job = makeSection('Part A · Find your job', 'Pick a job you’d want in ten years that fits your Career Profile Report. Find a real ad on Seek or JobJump, then screenshot and link it.', 0, [
        ck('Re-read your Year 10 Career Profile Report', true, 0), ck('Choose your ideal job ten years from now', true, 0),
        ck('Find a matching ad on Seek or JobJump', true, 0), ck('Screenshot the job ad', false), ck('Copy the link to the ad', true),
    ], 'Job I chose: Sports Physiotherapist at Bondi Sports Medicine (found on Seek)\nLink: paste the Seek link here\nScreenshot: still need to add it\n\nCareer Profile Report results:\n- Interests: health science, sport, helping people\n- Skills: communication, teamwork, problem solving\n- Values: helping others, an active lifestyle', 30);
    job.id = 'partA-job';
    const why = makeSection('Part A · Why this job suits you', 'Explain in 150 words why this job would suit you, using specific results from your Career Profile Report (interests, skills and values) and details from the ad.', 150, [
        ck('Refer to specific results from your Career Profile Report', true, 0), ck('Link the job to your interests', true, 0),
        ck('Link the job to your skills', true, 0), ck('Link the job to your values', false, 0),
        ck('Describe the features of the advertised job in detail', false, 0), ck('Stay within 150 words', false),
    ], "My Career Profile Report showed that my top interests are health science and sport, which is why a career as a sports physiotherapist would definately suit me. The job at Bondi Sports Medicine involves treating athletes, planning rehab programs and working with coaches. My report also said I am a strong communicator and I work well in a team. So this job would let me use these skills every day, and it's very close to what I value most, which is helping people stay active.", 40);
    why.id = 'partA-why';
    const cover = makeSection('Part B · Cover letter', 'Write a one-page letter, set in 2036, that persuades the employer you’re the right person for this exact job.', 350, [
        ck('Address it to the right person and company', true, 1), ck('Say which job you’re applying for in the opening', true, 1),
        ck('Highlight qualifications that match the ad', false, 1), ck('Give examples of relevant experience', false, 1),
        ck('Keep a professional tone throughout', false, 1), ck('Finish by asking for an interview', false, 1), ck('Fits on one page', false),
    ], 'Dear Ms Taylor,\n\nI am writing to apply for the position of Sports Physiotherapist at Bondi Sports Medicine, as advertised on Seek.', 60);
    cover.id = 'partB-cover';
    const cv = makeSection('Part B · CV / Résumé', 'Build a two-page CV as your 2036 self. Be creative, but keep every detail realistic for the job.', 0, [
        ck('Contact details and a short professional profile', false, 1), ck('Specific qualifications (degree, certificates)', false, 1),
        ck('Suitable work history, most recent first', false, 1), ck('Relevant experience and achievements', false, 1),
        ck('Skills that match the job ad', false, 1), ck('Two realistic references', false, 1), ck('No more than two pages', false),
    ], 'PROFILE\n\nQUALIFICATIONS\n- Bachelor of Physiotherapy, University of Sydney (2031)\n\nWORK HISTORY\n\nREFERENCES', 75);
    cv.id = 'partB-cv';
    const video = makeSection('Part C · Video application', 'Plan, script and record a one-minute video (50–65 seconds) showing why you’re the outstanding candidate. About 150 words of script fills a minute.', 160, [
        ck('Engaging first impression', false, 2), ck('Introduce yourself', false, 2), ck('Qualifications', false, 2), ck('Past experience', false, 2),
        ck('Personal skills, characteristics and values', false, 2), ck('Confident summary', false, 2), ck('Memorable closing statement', false, 2),
        ck('Video is 50–65 seconds long', false, 2), ck('Professional language, tone and etiquette', false, 2),
    ], '', 90);
    video.id = 'partC-video';
    const pdhpe = {
        id: 'pdhpe', title: 'PDHPE Job Application', subject: 'PDHPE', year: 10, kind: 'report', due: addDays(t, 19),
        wordLimit: 0, color: '#0E9F9A', typeLabel: 'Job application', meta: '3 parts · 25 marks',
        task: PDHPE_TASK,
        plain: PDHPE_BRIEF.question,
        criteria: [
            { part: 'Part A · Self-reflection', marks: 5, band: 'A · 5 marks', rubric: 'Insightful analysis of ‘Career Profile Report’ with thoughtful consideration of personal interests, skills and values. Highly detailed and clear description of the features of the advertised position. Clearly explains the alignment of the advertised position with their future vocation.', plain: 'Use real results from your Career Profile Report, describe the job ad in detail, and clearly show why the job fits the future you want.', sections: ['partA-job', 'partA-why'] },
            { part: 'Part B · Application', marks: 10, band: 'A · 9–10 marks', rubric: 'Effectively highlights pertinent information. Conveys a thorough understanding of the skills, qualifications, and experience specific to the advertised position. Persuasively demonstrates suitability for the advertised position. Utilises an appropriate structure to communicate in a professional tone with clarity and impact.', plain: 'Only include what matters for this exact job, show you know which skills and qualifications it needs, and sound professional and convincing.', sections: ['partB-cover', 'partB-cv'] },
            { part: 'Part C · Video application', marks: 10, band: 'A · 9–10 marks', rubric: 'Exceptionally engaging, creative, and professionally produced video. Effectively highlights significant skills, characteristics, qualifications and experience relevant to the job. Communicates persuasively with confidence, clarity, and impact. Uses appropriate language, tone and etiquette. Keeps the video to one-minute in length (50-65 seconds).', plain: 'Make a creative, polished one-minute video that sells your skills with confidence. Stay between 50 and 65 seconds.', sections: ['partC-video'] },
        ],
        resources: [
            { name: 'Year 10 PDHPE – Assessment 5 Notification (The Next Chapter).pdf', kind: 'Notification' },
            { name: 'Year 10 PDHPE – Assessment 5 Planner.pdf', kind: 'Scaffold' },
            { name: 'Marking criteria (pages 3–4 of the notification)', kind: 'Rubric' },
            { name: 'My Year 10 Career Profile Report.pdf', kind: 'Notes' },
        ],
        sections: [job, why, cover, cv, video],
        teacher: 'Parts A and B go through Turnitin on Canvas. Part C is a file upload. Your class teacher will confirm the exact due date for Week 3, Term 4.',
        away: [isoDay(addDays(t, 9)), isoDay(addDays(t, 10))], busy: [3],
    };
    const science = {
        id: 'science', title: 'Science Exam', subject: 'Science', year: 10, kind: 'exam', due: addDays(t, 21),
        wordLimit: 0, duration: '1h 30m', color: '#1FA06A',
        task: 'End of term examination covering Chemical Reactions and Genetics & Inheritance. Section A: 20 multiple choice. Section B: short answer. Section C: two extended responses. Duration: 90 minutes plus 5 minutes reading time.',
        plain: 'A 90-minute exam on two topics: chemical reactions and genetics. Expect multiple choice, short answers and two longer written responses.',
        criteria: [
            { rubric: 'Demonstrates knowledge and understanding of scientific concepts.', plain: 'Know the definitions and be able to explain them in your own words.', sections: [] },
            { rubric: 'Communicates scientific ideas using correct terminology and conventions.', plain: 'Use the right terms and write balanced equations properly.', sections: [] },
        ],
        resources: [{ name: 'Exam notification – Science.pdf', kind: 'Notification' }, { name: 'Genetics workbook.pdf', kind: 'Worksheet' }],
        sections: [
            makeSection('Chemical reactions', 'Know the reaction types and balance equations confidently.', 0, [
                ck('Know the five main reaction types', true), ck('Balance chemical equations', true),
                ck('Identify signs that a reaction has occurred', false), ck('Practise 10 recall questions', false)
            ], '', 60),
            makeSection('Genetics & inheritance', 'Understand DNA, genes and how traits are passed on.', 0, [
                ck('Explain DNA, genes and chromosomes', true), ck('Use Punnett squares', false),
                ck('Know dominant and recessive terminology', false), ck('Practise 2 extended responses', false)
            ], '', 70),
            makeSection('Timed practice', 'Rehearse the real conditions so 90 minutes feels normal.', 0, [
                ck('Complete one past paper under time', false), ck('Mark it with the marking guide', false),
                ck('Review every question you got wrong', false)
            ], '', 120),
        ],
        teacher: 'Mr Okafor said Section C is worth the most marks.',
        away: [], busy: [],
    };
    const math = {
        id: 'math', title: 'Math Assessment', subject: 'Mathematics', year: 10, kind: 'report', due: addDays(t, 26),
        wordLimit: 1000, color: '#2F7BF5',
        task: 'Statistical investigation: pose a statistical question, collect a sample of at least 30 data points, represent and analyse the data, and evaluate your findings. Report length approximately 1,000 words.',
        plain: 'Ask a question you can answer with data, collect at least 30 results, graph and analyse them, then explain what you found and what could be better.',
        criteria: [
            { rubric: 'Poses a clear statistical question and appropriate method.', plain: 'Your question should be measurable and your method should actually answer it.', sections: [] },
            { rubric: 'Represents and analyses data accurately.', plain: 'Correct graphs, correct mean/median/range, and you explain what they show.', sections: [] },
        ],
        resources: [{ name: 'Statistics investigation task sheet.pdf', kind: 'Notification' }],
        sections: [
            makeSection('Question & plan', 'State your statistical question and how you will collect data.', 200, [ck('Write a measurable question', true), ck('Describe your sampling method', false), ck('Predict a likely result', false)], 'My question: do Year 10 students who play a sport sleep more hours on school nights than those who don\'t?', 30),
            makeSection('Data collection', 'Record your raw data and explain any issues.', 150, [ck('Collect at least 30 data points', false), ck('Present raw data in a table', false)], '', 45),
            makeSection('Analysis', 'Graph the data and calculate summary statistics.', 400, [ck('Choose a suitable graph', false), ck('Calculate mean, median and range', false), ck('Describe the shape of the data', false)], '', 60),
            makeSection('Conclusion & evaluation', 'Answer your question and evaluate your method.', 250, [ck('Answer the question using your results', false), ck('Identify two limitations', false), ck('Suggest an improvement', false)], '', 30),
        ],
        teacher: '', away: [], busy: [],
    };
    const english = {
        id: 'english', title: 'English Persuasive Speech', subject: 'English', year: 10, kind: 'presentation', due: addDays(t, -6),
        wordLimit: 700, color: '#E08A1E', task: 'Deliver a 4–5 minute persuasive speech on a contemporary issue.',
        plain: 'A 4–5 minute persuasive speech on an issue you care about.',
        criteria: [], resources: [], teacher: '', away: [], busy: [],
        sections: ['Opening hook', 'Key point 1', 'Key point 2', 'Conclusion'].map(n => {
            const s = makeSection(n, '', 175, [ck('Done', true)], 'Completed.', 30);
            s.complete = true;
            return s;
        }),
    };
    return [pdhpe, science, math, english];
}
// ---------------------------------------------------------------- state
const DEFAULT_LOOK = { mode: 'system', style: 'midnight', accent: '#2F7BF5', radius: 14, density: 'comfortable', font: 'Inter', prog: 'green', art: true };
function freshOnb(kind = 'essay') {
    return {
        step: 0, year: 'Year 10', subjects: ['PDHPE', 'English'], goals: ['Better understand my assessment'], files: [],
        title: '', subject: 'PDHPE', kind, due: isoDay(addDays(today(), 14)), words: 1200, confidence: 3,
        started: 'Not yet', hours: 4, away: false, awayFrom: '', awayTo: '', busy: [], prep: ['Notes'], strict: 3, teacher: '', error: '', drafts: [],
    };
}
function loadLook() {
    try {
        const raw = localStorage.getItem('veyra-look');
        if (raw)
            return { ...DEFAULT_LOOK, ...JSON.parse(raw) };
    }
    catch { /* storage unavailable */ }
    return { ...DEFAULT_LOOK };
}
const state = {
    route: { name: 'landing' }, history: [],
    user: { first: 'Leni', last: 'Hourahine', year: 10, school: 'Waverley College' },
    assessments: seed().map(x => x.id === 'pdhpe' ? resetWork(x) : x), chats: {}, activity: [], look: loadLook(),
    navOpen: false, lookOpen: false, onb: freshOnb(), toast: '', toastKind: '',
    filter: 'all', progTab: 'overview', settingsOpen: '', chatCtx: 'pdhpe',
    study: { aId: 'science', mode: 'cards', card: 0, flipped: false, q: 0, picked: null, score: 0 },
    focus: false, showOriginal: false, term: 0,
};
state.chats['pdhpe:partA-why'] = [
    { from: 'me', html: 'What should I include from my Career Profile Report?' },
    { from: 'ai', html: profileReply() },
];
state.activity = [
    { text: 'Maths practice quiz', sub: 'Completed · 92%', at: Date.now() - 2 * DAY, tone: 'done' },
    { text: 'PDHPE Job Application', sub: 'Roadmap created', at: Date.now() - 1 * DAY, tone: 'new' },
    { text: 'English Persuasive Speech', sub: 'Submitted', at: Date.now() - 6 * DAY, tone: 'done' },
];
const findA = (id) => state.assessments.find(a => a.id === id);
const findS = (a, id) => a === null || a === void 0 ? void 0 : a.sections.find(s => s.id === id);
// ---------------------------------------------------------------- progress + planning
function secProgress(s) {
    if (s.complete)
        return 1;
    const total = s.checklist.length;
    const done = s.checklist.filter(c => c.done).length;
    const started = s.text.trim() || s.notes.trim() ? 0.15 : 0;
    return Math.min(0.9, (total ? done / total : 0) * 0.75 + started);
}
const aProgress = (a) => a.sections.reduce((n, s) => n + secProgress(s), 0) / Math.max(1, a.sections.length);
const minutesLeft = (a) => a.sections.reduce((n, s) => n + s.minutes * (1 - secProgress(s)), 0) + (a.kind === 'exam' ? 0 : 30);
const isDone = (a) => a.sections.every(s => s.complete);
const upcoming = () => state.assessments.filter(a => daysUntil(a.due) >= 0 && !isDone(a)).sort((x, y) => x.due.getTime() - y.due.getTime());
const totalWords = (a) => a.sections.reduce((n, s) => n + words(s.text), 0);
const sectionsLeft = (a) => a.sections.filter(s => !s.complete).length;
function planTasks(a) {
    const tasks = [];
    for (const s of a.sections) {
        if (s.complete)
            continue;
        const p = secProgress(s);
        if (a.kind === 'exam') {
            if (p < 0.5)
                tasks.push({ text: `Revise ${s.title.toLowerCase()}`, minutes: Math.round(s.minutes / 2), aId: a.id, sec: s.id });
            tasks.push({ text: `Practice questions: ${s.title.toLowerCase()}`, minutes: Math.round(s.minutes / 2), aId: a.id, sec: s.id });
        }
        else {
            if (!s.text.trim())
                tasks.push({ text: `Plan ${s.title}`, minutes: 15, aId: a.id, sec: s.id });
            tasks.push({ text: `${s.text.trim() ? 'Finish' : 'Draft'} ${s.title}`, minutes: Math.max(20, Math.round(s.minutes * (1 - p))), aId: a.id, sec: s.id });
            const open = s.checklist.filter(c => !c.done).length;
            if (open)
                tasks.push({ text: `Check ${s.title} against its checklist (${open} left)`, minutes: 10, aId: a.id, sec: s.id });
        }
    }
    if (a.kind === 'exam')
        tasks.push({ text: 'Light review of key terms, then rest', minutes: 30, aId: a.id });
    else
        tasks.push({ text: 'Read the full assessment start to finish', minutes: 20, aId: a.id }, { text: 'Final proofread and word count check', minutes: 20, aId: a.id });
    return tasks;
}
function buildPlan(a) {
    const n = Math.max(1, daysUntil(a.due));
    const days = [];
    for (let i = 0; i < n; i++) {
        const d = addDays(today(), i);
        const key = isoDay(d);
        const away = a.away.includes(key);
        const busy = a.busy.includes(d.getDay());
        days.push({ date: d, key, away, busy, cap: away ? 0 : busy ? 1 : 3, tasks: [] });
    }
    const avail = days.filter(d => d.cap > 0);
    if (!avail.length) {
        days[0].cap = 9;
        avail.push(days[0]);
    }
    const tasks = planTasks(a);
    if (tasks.length <= avail.length) {
        const step = avail.length / tasks.length;
        tasks.forEach((t, i) => avail[Math.min(avail.length - 1, Math.floor(i * step))].tasks.push(t));
    }
    else {
        const target = Math.ceil(tasks.length / avail.length);
        let di = 0;
        for (const t of tasks) {
            while (di < avail.length - 1 && avail[di].tasks.length >= Math.min(target, avail[di].cap))
                di++;
            avail[di].tasks.push(t);
        }
    }
    return days;
}
// ---------------------------------------------------------------- writing checks
const SPELL = {
    monarcy: 'monarchy', seperate: 'separate', definately: 'definitely', recieve: 'receive', goverment: 'government',
    occured: 'occurred', untill: 'until', beleif: 'belief', wich: 'which', thier: 'their', alot: 'a lot',
    arguement: 'argument', enviroment: 'environment', parliment: 'parliament', priviledge: 'privilege',
    independance: 'independence', acheive: 'achieve', begining: 'beginning', beleive: 'believe', revoloution: 'revolution',
    sucess: 'success', neccessary: 'necessary', influance: 'influence', thats: "that's", becuase: 'because', teh: 'the',
};
const CONTRACTIONS = {
    "wasn't": 'was not', "isn't": 'is not', "don't": 'do not', "didn't": 'did not', "can't": 'cannot', "won't": 'will not',
    "it's": 'it is', "weren't": 'were not', "couldn't": 'could not', "wouldn't": 'would not', "doesn't": 'does not',
};
function findIssues(text, ignored = []) {
    const out = [];
    const push = (i) => { if (!ignored.includes(`${i.word}|${i.fix}`))
        out.push(i); };
    let m;
    const wre = /[A-Za-z']+/g;
    while ((m = wre.exec(text))) {
        const w = m[0];
        const lw = w.toLowerCase();
        if (SPELL[lw]) {
            const fix = w[0] === w[0].toUpperCase() ? SPELL[lw][0].toUpperCase() + SPELL[lw].slice(1) : SPELL[lw];
            push({ type: 'spelling', start: m.index, end: m.index + w.length, word: w, fix, msg: `“${w}” looks misspelled.` });
        }
        else if (CONTRACTIONS[lw]) {
            const f = CONTRACTIONS[lw];
            push({ type: 'grammar', start: m.index, end: m.index + w.length, word: w, fix: w[0] === w[0].toUpperCase() ? f[0].toUpperCase() + f.slice(1) : f, msg: 'Contractions read as informal in formal writing.' });
        }
        else if (lw === 'very') {
            push({ type: 'grammar', start: m.index, end: m.index + w.length, word: w, fix: '', msg: '“Very” is vague. A more precise word will be stronger. Veyra leaves the choice to you.' });
        }
        else if (w === 'i') {
            push({ type: 'grammar', start: m.index, end: m.index + 1, word: w, fix: 'I', msg: '“I” should be capitalised.' });
        }
    }
    const sre = /(^|[.!?]\s+)(So|And|But)\b/g;
    while ((m = sre.exec(text))) {
        const start = m.index + m[1].length;
        const w = m[2];
        const fix = w === 'So' ? 'Therefore,' : w === 'And' ? 'Furthermore,' : 'However,';
        push({ type: 'grammar', start, end: start + w.length, word: w, fix, msg: `Consider a more formal linking word (e.g. “${fix.replace(',', '')}”) instead of “${w}”.` });
    }
    const dre = / {2,}/g;
    while ((m = dre.exec(text)))
        push({ type: 'grammar', start: m.index, end: m.index + m[0].length, word: '␣␣', fix: ' ', msg: 'Double space.' });
    return out.sort((a, b) => a.start - b.start);
}
function highlight(text, ignored) {
    const issues = findIssues(text, ignored);
    let html = '';
    let pos = 0;
    for (const i of issues) {
        if (i.start < pos)
            continue;
        html += esc(text.slice(pos, i.start));
        html += `<mark class="${i.type === 'spelling' ? 'sp' : 'gr'}">${esc(text.slice(i.start, i.end))}</mark>`;
        pos = i.end;
    }
    return html + esc(text.slice(pos)) + '\n ';
}
// ---------------------------------------------------------------- chat replies (scripted)
function tier2Reply() {
    return `<p>Tier 2 language is academic vocabulary used across subjects. It’s more precise than everyday words:</p>
  <ul class="cols"><li>analyse</li><li>evaluate</li><li>significant</li><li>demonstrate</li><li>illustrate</li><li>consequence</li><li>perspective</li><li>furthermore</li></ul>
  <p class="soft">For a job application, words like <em>demonstrate, collaborate, initiative</em> and <em>committed</em> sound professional without being stiff.</p>`;
}
function profileReply() {
    return `<p>Pull out three things from your <b>Career Profile Report</b> and link each one to the job ad:</p>
  <ul><li><b>Interests</b>: e.g. “health science and sport” → the job treats athletes</li><li><b>Skills</b>: e.g. “strong communicator” → you’d explain rehab plans to clients</li><li><b>Values</b>: e.g. “helping others” → the clinic’s focus on recovery</li></ul>
  <p>The top band wants <em>specific</em> results, so name what the report actually says rather than “I like sport”.</p>
  <p class="soft">Start with whichever one feels easiest to write about.</p>`;
}
function aiReply(q, a, s) {
    var _a, _b;
    const l = q.toLowerCase();
    const secName = s ? s.title : 'this section';
    if (/(write|generate|draft|do|finish|complete|make)\b.*\b(for me|my (essay|paragraph|intro|introduction|conclusion|section))|write (it|this|the)/.test(l)) {
        const open = s ? s.checklist.filter(c => !c.done) : [];
        return `<p>I’m Atlas, and I won’t write it for you. Your teacher is marking your thinking, and that has to stay yours. I can help you get it moving though.</p>
      ${s ? `<p><b>${esc(secName)}</b> needs to: ${esc(s.purpose.charAt(0).toLowerCase() + s.purpose.slice(1))}</p>` : ''}
      ${open.length ? `<p>Still open on your checklist:</p><ul>${open.map(c => `<li>${esc(c.text)}</li>`).join('')}</ul>` : ''}
      <p class="soft">Try writing one rough sentence for the first item. I’ll tell you whether it hits the criteria.</p>`;
    }
    if (/tier ?(2|3|two|three)|vocab|terminolog|fancy words/.test(l))
        return tier2Reply();
    if (/career profile|profile report/.test(l))
        return profileReply();
    if (/cover letter/.test(l))
        return `<p>A strong one-page cover letter usually has four short parts:</p>
      <ol><li><b>Opening</b>: the exact job title and where you saw it.</li><li><b>Why you fit</b>: two or three qualifications from the ad, each with proof.</li><li><b>Experience</b>: a real-sounding example of doing similar work.</li><li><b>Close</b>: thank them and ask for an interview.</li></ol>
      <p class="soft">Keep the tone professional. The top band says “persuasively demonstrates suitability”, so every sentence should point back to the ad.</p>`;
    if (/\bcv\b|resume|résumé|curriculum/.test(l))
        return `<p>Your CV (max two pages) should include:</p>
      <ul><li>Contact details and a 2–3 line professional profile</li><li>Qualifications: degree, certificates, registrations</li><li>Work history, most recent first</li><li>Key skills that match the ad</li><li>Two realistic references (name, role, contact)</li></ul>
      <p class="soft">Remember it’s 2036, so you can have a degree and a few years of work, but keep it believable.</p>`;
    if (/video|record|film|part c/.test(l))
        return `<p>For the one-minute video, aim for <b>50–65 seconds</b> (about 130–160 words of script):</p>
      <ol><li>Engaging first impression</li><li>Introduce yourself</li><li>Qualifications</li><li>Past experience</li><li>Personal skills, characteristics and values</li><li>Confident summary</li><li>Memorable closing line</li></ol>
      <p class="soft">Dress and speak as you would in a real interview. That’s the “language, tone and etiquette” part of the rubric.</p>`;
    if (/seek|jobjump|job ad|advert|find a job|which job/.test(l))
        return `<p>Search for the job you picked on <b>Seek</b> or <b>JobJump</b>, choose an ad that matches your Career Profile Report, then screenshot it and copy the link for Part A.</p>
      <p class="soft">JobJump: sign up with your school email (the login details are on your notification).</p>`;
    if (/investigate|construct|explain|nesa|glossary|key term/.test(l))
        return `<p>The NESA terms in your task mean:</p>
      <ul><li><b>Investigate</b>: plan, look into and draw conclusions about.</li><li><b>Explain</b>: show why and/or how, and relate cause and effect.</li><li><b>Construct</b>: make or put together yourself.</li></ul>`;
    if (/source|reference|research|reading|evidence|quote/.test(l)) {
        if ((a === null || a === void 0 ? void 0 : a.subject) === 'PDHPE')
            return `<p>Useful places for this task:</p>
      <ul class="sources"><li><a href="https://www.seek.com.au" target="_blank" rel="noopener">Seek</a><small>Find a real job ad for Part A.</small></li>
      <li><a href="https://www.waverleycollegecareers.com" target="_blank" rel="noopener">Waverley College Careers</a><small>The school’s careers site, including JobJump for CVs.</small></li>
      <li>Canva CV and cover letter templates<small>Recommended on your planner for Part B.</small></li></ul>
      <p class="soft">Your best source is your own Career Profile Report.</p>`;
        return `<p>For ${esc((_a = a === null || a === void 0 ? void 0 : a.subject) !== null && _a !== void 0 ? _a : 'this subject')}, start with your class resources, then one reliable overview source (a textbook or encyclopedia), then a primary source if the task needs one.</p><p class="soft">In the full version Veyra will search for sources that match your task.</p>`;
    }
    if (/rubric|criteria|mark|band|teacher (want|look)|top/.test(l) && a) {
        return `<p>Here’s what your marker is looking for, in plain words:</p><ul>${a.criteria.map(c => `<li>${esc(c.plain)}</li>`).join('')}</ul>${a.teacher ? `<p class="soft">Also: ${esc(a.teacher)}</p>` : ''}`;
    }
    if (/left|next|todo|to do|what should|stuck|checklist/.test(l)) {
        if (s) {
            const open = s.checklist.filter(c => !c.done);
            return open.length
                ? `<p>For ${esc(secName)}, you still have:</p><ul>${open.map(c => `<li>${esc(c.text)}</li>`).join('')}</ul><p class="soft">Pick the first one. Small steps.</p>`
                : `<p>Every checklist item for ${esc(secName)} is ticked. Re-read it once, then mark it complete when you’re happy.</p>`;
        }
        if (a) {
            const d = buildPlan(a)[0];
            return `<p>Today’s plan for ${esc(a.title)}:</p><ul>${d.tasks.map(t => `<li>${esc(t.text)} <small>${t.minutes} min</small></li>`).join('') || '<li>Nothing scheduled today. Enjoy the break.</li>'}</ul>`;
        }
    }
    if (/time|plan|schedule|due|deadline|how long/.test(l) && a) {
        return `<p>${esc(a.title)} is due ${fmtLong(a.due)} (${dueIn(a)}). You have about ${hm(minutesLeft(a))} of work left, spread across your plan. Open the Plan tab to move days around if something comes up.</p>`;
    }
    if (/hello|^hi\b|hey/.test(l))
        return `<p>Hi ${esc(state.user.first)}, I’m Atlas. I know your ${esc((_b = a === null || a === void 0 ? void 0 : a.title) !== null && _b !== void 0 ? _b : 'assessments')}, the rubric and where you’re up to. Ask me to explain something, find sources or check what’s left.</p>`;
    return `<p>In the full version I’d answer this using your task, rubric and uploaded resources. In this preview I can show you a few kinds of help:</p>
    <ul><li>Explain a term (“What does construct mean?”)</li><li>Find sources (“Give me reliable sources”)</li><li>Decode the rubric (“What does my teacher want?”)</li><li>Check progress (“What’s left in this section?”)</li></ul>`;
}
function suggestions(a, s) {
    if ((a === null || a === void 0 ? void 0 : a.kind) === 'exam')
        return ['What should I revise today?', 'What does my teacher want?', 'Give me reliable sources'];
    if (s)
        return [`What’s left in ${s.title}?`, 'Give me reliable sources', 'What does my teacher want?', 'Can you write this for me?'];
    if (a)
        return ['What should I do next?', 'Give me reliable sources', 'What does my teacher want?'];
    return ['What does “construct” mean?', 'How do I structure a cover letter?', 'How long do I have left?'];
}
// ---------------------------------------------------------------- shell
function navItem(label, ic, to, active, extra = '') {
    return `<button class="nav-i${active ? ' on' : ''}" data-action="go" data-to="${to}" ${extra}>${icon(ic)}<span>${label}</span></button>`;
}
function sidebar() {
    const r = state.route;
    const inA = ['assessment', 'section', 'full'].includes(r.name) ? findA(r.id) : undefined;
    const aActive = r.name === 'assessments' || (!!inA && inA.kind !== 'exam');
    const eActive = r.name === 'exams' || (!!inA && inA.kind === 'exam');
    let nested = '';
    if (inA) {
        const sub = (label, to, on, extra = '', done = false) => `<button class="nav-sub${on ? ' on' : ''}" data-action="go" data-to="${to}" data-id="${inA.id}" ${extra}><span class="dot${done ? ' done' : ''}"></span>${esc(label)}</button>`;
        nested = `<div class="nav-nest">
      <div class="nav-a">${icon(KIND_ICON[inA.kind])}<span>${esc(inA.title)}</span></div>
      ${sub('Overview', 'assessment', r.name === 'assessment' && (!r.tab || r.tab === 'overview'))}
      ${inA.sections.map(s => sub(s.title, 'section', r.name === 'section' && r.sec === s.id, `data-sec="${s.id}"`, s.complete)).join('')}
      ${inA.kind !== 'exam' ? sub('Full Assessment', 'full', r.name === 'full') : ''}
    </div>`;
    }
    return `<aside class="side" aria-label="Main navigation">
    <div class="side-top">${wordmark()}<button class="icon-btn side-x" data-action="menu" aria-label="Close menu">${icon('x')}</button></div>
    <nav class="nav">
      ${navItem('Home', 'home', 'dashboard', r.name === 'dashboard')}
      ${navItem('Assessments', 'file', 'assessments', aActive)}
      ${inA && inA.kind !== 'exam' ? nested : ''}
      ${navItem('Exams', 'flask', 'exams', eActive)}
      ${inA && inA.kind === 'exam' ? nested : ''}
      ${navItem('Progress', 'chart', 'progress', r.name === 'progress')}
      ${navItem('Atlas', 'chat', 'chat', r.name === 'chat')}
    </nav>
    <div class="side-foot">
      ${navItem('Settings', 'sliders', 'settings', r.name === 'settings')}
      <button class="me" data-action="go" data-to="settings"><span class="avatar">${state.user.first[0]}${state.user.last[0]}</span><span><b>${esc(state.user.first)} ${esc(state.user.last[0])}.</b><small>Year ${state.user.year}</small></span></button>
    </div>
  </aside>`;
}
function shell(page) {
    return `<div class="shell${state.navOpen ? ' nav-open' : ''}">
    ${sidebar()}
    <div class="scrim" data-action="menu"></div>
    <div class="main">
      <header class="mtop"><button class="icon-btn" data-action="menu" aria-label="Open menu">${icon('menu')}</button>${wordmark()}<span></span></header>
      ${page}
    </div>
  </div>`;
}
function aIcon(a, size = '') {
    return `<span class="aicon ${size}" style="--c:${a.color}">${icon(KIND_ICON[a.kind])}</span>`;
}
function statusPill(s) {
    if (s.complete)
        return `<span class="pill ok">${icon('check')}Complete</span>`;
    return secProgress(s) > 0 ? '<span class="pill prog">In progress</span>' : '<span class="pill">Not started</span>';
}
// ---------------------------------------------------------------- landing
const JOURNEY = [
    { t: 'Upload', d: 'Add whatever you have: the notification, rubric, scaffold, slides or notes. No required set.', ic: 'upload' },
    { t: 'Answer', d: 'A short setup quiz about your deadline, your confidence, your teacher and your week.', ic: 'quiz' },
    { t: 'Understand', d: 'Veyra translates the task into plain language, so you know exactly what you’re being asked to do.', ic: 'sparkle' },
    { t: 'Build', d: 'Your assessment becomes sections, each with its own purpose, checklist and word target.', ic: 'layers' },
    { t: 'Work', d: 'Write each section yourself in a focused editor, with the assistant on hand for research.', ic: 'pen' },
    { t: 'Check', d: 'Tick off requirements pulled straight from the rubric, section by section.', ic: 'check' },
    { t: 'Improve', d: 'Spelling and grammar suggestions you choose to accept. Veyra never rewrites your work.', ic: 'target' },
    { t: 'Complete', d: 'You decide when a section is done. Reopen it any time.', ic: 'trophy' },
];
// ---- interactive previews inside "How it works"
const jd = {
    files: ['Assessment 5 Notification.pdf', 'Assessment 5 Planner.pdf', 'Career Profile Report.pdf'],
    conf: 3, away: 'Yes', orig: false, uTab: 'plain', term: 0,
    secs: [true, true, false, false, false],
    text: 'My Career Profile Report showed that my top interests are health science and sport, which is why a career as a sports physiotherapist would suit me. The job involves treating athletes and planning rehab programs.',
    checks: [true, true, false, true],
    fixed: false, complete: false,
};
const EXTRA_FILES = ['Class slides.pptx', 'My notes.docx', 'Teacher instructions.pdf', 'Worksheet.pdf'];
function journeyVisual(i, where = 's') {
    switch (i) {
        case 0: return `<div class="jv-files">${jd.files.map((f, n) => `<span class="jv-file" style="--n:${n}">${icon('file')}<em>${esc(f)}</em><button class="jv-x" data-action="jd" data-k="rmfile" data-v="${n}" aria-label="Remove ${esc(f)}">${icon('x')}</button></span>`).join('')}
      <button class="jv-add" data-action="jd" data-k="addfile">${icon('upload')}Add a file</button></div>`;
        case 1: return `<div class="jv-q"><small>How confident are you writing a job application?</small><div class="jv-scale">${[1, 2, 3, 4, 5].map(n => `<button class="${n === jd.conf ? 'on' : ''}" data-action="jd" data-k="conf" data-v="${n}" aria-pressed="${n === jd.conf}">${n}</button>`).join('')}</div>
      <div class="jv-scale-l"><span>Not at all</span><span>Very</span></div>
      <small>Going away before it’s due?</small><div class="jv-scale two">${['No', 'Yes'].map(v => `<button class="${jd.away === v ? 'on' : ''}" data-action="jd" data-k="away" data-v="${v}" aria-pressed="${jd.away === v}">${v}</button>`).join('')}</div>
      <p class="jv-react">${jd.conf <= 2 ? 'Veyra will add extra explanation and start you earlier.' : jd.conf >= 4 ? 'Veyra will keep explanations short and focus on the rubric.' : 'Veyra will balance explanation with planning.'}${jd.away === 'Yes' ? ' Your plan will skip the days you’re away.' : ''}</p></div>`;
        case 2: {
            const b = PDHPE_BRIEF;
            const tabs = `<div class="ub-tabs">${[['plain', 'In plain English'], ['decode', 'Decode the wording']].map(([k, l]) => `<button class="${jd.uTab === k ? 'on' : ''}" data-action="jd" data-k="utab" data-v="${k}">${l}</button>`).join('')}</div>`;
            if (jd.uTab === 'decode') {
                const [ph, meaning] = b.decode[jd.term];
                return `<div class="ub">${tabs}
          <p class="ub-orig">${decodeHtml(PDHPE_TASK, b.decode, jd.term, 'jterm')}</p>
          <div class="ub-mean"><small>“${esc(ph)}” means</small><b>${esc(meaning)}</b></div>
          <p class="jv-hint">Hover or tap a highlighted phrase</p></div>`;
            }
            return `<div class="ub">${tabs}
        <div class="ub-q"><small>The question</small><b>${esc(b.question)}</b></div>
        <ol class="ub-steps">${b.steps.map(([t, d], n) => `<li style="--n:${n}"><span>${n + 1}</span><div><b>${esc(t)}</b><small>${esc(d)}</small></div></li>`).join('')}</ol>
        <div class="ub-facts">${b.facts.map(([k, v]) => `<span><em>${k}</em>${esc(v)}</span>`).join('')}</div></div>`;
        }
        case 3: return `<ol class="jv-secs">${[['Part A · Find your job', 'Seek / JobJump'], ['Part A · Why it suits you', '150 words'], ['Part B · Cover letter', 'Max 1 page'], ['Part B · CV / Résumé', 'Max 2 pages'], ['Part C · Video', '50–65 sec']].map(([t, m], n) => `<li style="--n:${n}"><button class="${jd.secs[n] ? 'done' : ''}" data-action="jd" data-k="sec" data-v="${n}" aria-pressed="${jd.secs[n]}"><b>${jd.secs[n] ? icon('check') : n + 1}</b>${t}<small>${m}</small></button></li>`).join('')}</ol>
      <p class="jv-hint">${jd.secs.filter(Boolean).length} of 5 complete · click a section</p>`;
        case 4: {
            const n = words(jd.text);
            return `<div class="jv-ed"><textarea id="jv-text-${where}" data-jdtext aria-label="Try writing" spellcheck="false">${esc(jd.text)}</textarea><span class="jv-wc${n > 150 ? ' over' : ''}" data-jdwc>${n} / 150 words</span></div>`;
        }
        case 5: {
            const items = ['Refer to your Career Profile Report', 'Link the job to your interests', 'Link the job to your values', 'Describe the job ad in detail'];
            return `<ul class="jv-check">${items.map((c, n) => `<li style="--n:${n}"><button class="${jd.checks[n] ? 'on' : ''}" role="checkbox" aria-checked="${jd.checks[n]}" data-action="jd" data-k="check" data-v="${n}"><span>${icon('check')}</span>${c}</button></li>`).join('')}</ul>
        <p class="jv-hint">${jd.checks.filter(Boolean).length}/4 requirements · tick and untick them</p>`;
        }
        case 6: return `<div class="jv-fix"><p>…a career as a sports physiotherapist would ${jd.fixed ? '<span class="jv-fixed">definitely</span>' : '<mark>definately</mark>'} suit me…</p>
      ${jd.fixed
            ? `<div class="jv-sug ok"><span class="issue-k">Fixed</span>No spelling issues left<button data-action="jd" data-k="fix">Undo</button></div>`
            : `<div class="jv-sug"><span class="issue-k">Spelling</span>“definately” → “definitely”<button data-action="jd" data-k="fix">Change</button></div>`}</div>`;
        default: return `<div class="jv-done">${ring(jd.complete ? 1 : 0.78, 120, 11)}<b>${jd.complete ? 'Part A complete' : 'Part A · 3/4 done'}</b><small>${jd.complete ? 'You decided it’s ready. You can reopen it any time.' : 'Veyra never marks it done for you.'}</small>
      <button class="btn ${jd.complete ? 'outline' : 'dark'} sm" data-action="jd" data-k="complete">${jd.complete ? `${icon('undo')}Reopen` : `${icon('check')}Mark complete`}</button></div>`;
    }
}
function refreshJv(i) {
    app.querySelectorAll(`[data-jvi="${i}"]`).forEach(el => { el.innerHTML = journeyVisual(i, el.dataset.where); });
}
function journeyAction(k, v) {
    var _a;
    let i = 0;
    if (k === 'rmfile') {
        jd.files.splice(Number(v), 1);
        i = 0;
    }
    if (k === 'addfile') {
        const next = (_a = EXTRA_FILES.find(f => !jd.files.includes(f))) !== null && _a !== void 0 ? _a : 'Extra resource.pdf';
        if (jd.files.length < 5)
            jd.files.push(next);
        i = 0;
    }
    if (k === 'conf') {
        jd.conf = Number(v);
        i = 1;
    }
    if (k === 'away') {
        jd.away = v;
        i = 1;
    }
    if (k === 'orig') {
        jd.orig = !jd.orig;
        i = 2;
    }
    if (k === 'utab') {
        jd.uTab = v;
        i = 2;
    }
    if (k === 'sec') {
        jd.secs[Number(v)] = !jd.secs[Number(v)];
        i = 3;
    }
    if (k === 'check') {
        jd.checks[Number(v)] = !jd.checks[Number(v)];
        i = 5;
    }
    if (k === 'fix') {
        jd.fixed = !jd.fixed;
        i = 6;
    }
    const before = jd.complete ? 1 : 0.78;
    if (k === 'complete') {
        jd.complete = !jd.complete;
        i = 7;
        if (jd.complete)
            toast('Part A complete. Nice work.', 'win');
    }
    refreshJv(i);
    if (k === 'complete')
        app.querySelectorAll('[data-jvi="7"] .ring').forEach(rg => animateRing(rg, before));
}
const MEET = [
    ['What does “construct” mean?', 'It’s a NESA term that means <b>make or put together</b>. For Part B, that’s building your own cover letter and CV, and a Canva template is fine to start from.'],
    ['Where do I find a job ad?', 'Search on <b>Seek</b> or <b>JobJump</b> for the job you picked. Choose one that matches your Career Profile Report, then screenshot the ad and copy its link for Part A.'],
    ['What should I do today?', 'About 40 minutes: finish your Part A reflection (you’re at 84 of 150 words), then link it to your values. Your cover letter can start on Thursday.'],
    ['Can you write my cover letter?', 'I won’t write it, because it has to be yours. Tell me the top two skills the job ad asks for, and I’ll help you plan a paragraph for each.'],
];
let atlasDemo = 0;
let planView = 'premium';
const PLAN_ROWS = [
    ['Atlas messages', 'Uses tokens', 'Unlimited'],
    ['New assessments', 'Uses tokens', 'Unlimited'],
    ['Resource uploads', 'Standard', 'Larger files'],
    ['Estimated mark against the rubric', '', 'Included'],
    ['Practice questions and quizzes', 'Basic', 'More of them'],
    ['Planning around your week', 'Basic', 'Advanced'],
];
function premiumCard() {
    const prem = planView === 'premium';
    return `<div class="premium${prem ? ' is-prem' : ''}" data-premium>
    <div class="pm-top"><span class="pm-badge">${icon('sparkle')}Veyra Premium</span>
      <div class="pm-toggle" role="tablist" aria-label="Compare plans">${['free', 'premium'].map(k => `<button role="tab" aria-selected="${planView === k}" class="${planView === k ? 'on' : ''}" data-action="plan" data-v="${k}">${k === 'free' ? 'Free' : 'Premium'}</button>`).join('')}</div></div>
    <h3>${prem ? 'No limits on Atlas or your assessments' : 'Everything you need to get started'}</h3>
    <div class="pm-tokens">
      <div class="pm-tk-h"><span>Tokens</span><b data-tokens>${prem ? '∞' : '1,000'}</b></div>
      <span class="pm-meter"><i style="width:${prem ? 100 : 62}%"></i></span>
      <small>${prem ? 'Unlimited. Ask Atlas and create assessments as often as you like.' : 'Every Atlas message and every new assessment uses tokens. You start with 1,000.'}</small>
    </div>
    <ul class="pm-rows">${PLAN_ROWS.map(([label, free, pro]) => {
        const v = prem ? pro : free;
        return `<li class="${v ? '' : 'off'}"><span class="pm-ic">${icon(v ? 'check' : 'lock')}</span><span>${label}</span><em>${v || 'Premium only'}</em></li>`;
    }).join('')}</ul>
    <button class="btn pm-cta" data-action="${prem ? 'premium-cta' : 'go'}" ${prem ? '' : 'data-to="onboarding"'}>${prem ? `Go Premium ${icon('arrowR')}` : `Start free ${icon('arrowR')}`}</button>
  </div>`;
}
const RAIL = ['Welcome', 'Veyra in numbers', 'How it works', 'The rubric, translated', 'You write it', 'What we care about', 'Atlas and Premium', 'Our promise', 'Get started'];
function scrollRail() {
    return `<nav class="rail" aria-label="Page sections">
    <button class="rail-cue" data-action="rail-next" aria-label="Scroll to see more"><span>Scroll for more</span>${icon('chevD')}</button>
    <div class="rail-track"><span class="rail-fill" data-rail-fill></span>
      ${RAIL.map((l, i) => `<button class="rail-dot${i === 0 ? ' on' : ''}" data-action="rail" data-i="${i}" aria-label="${l}"><em>${l}</em></button>`).join('')}
    </div>
    <small class="rail-count" data-rail-count>1 / ${RAIL.length}</small>
  </nav>`;
}
function railSections() { return Array.from(app.querySelectorAll('[data-rail]')); }
function railJump(i) {
    const el = railSections()[i];
    if (!el)
        return;
    jProgUntil = performance.now() + 1100;
    window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top, behavior: reduceMotion() ? 'auto' : 'smooth' });
}
function updateRail() {
    const rail = app.querySelector('.rail');
    if (!rail)
        return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    const fill = rail.querySelector('[data-rail-fill]');
    if (fill)
        fill.style.height = `${p * 100}%`;
    let active = 0;
    railSections().forEach((el, i) => { if (el.getBoundingClientRect().top <= window.innerHeight * 0.4)
        active = i; });
    if (p > 0.995)
        active = RAIL.length - 1;
    rail.querySelectorAll('.rail-dot').forEach((d, i) => { d.classList.toggle('on', i === active); d.classList.toggle('past', i < active); });
    const count = rail.querySelector('[data-rail-count]');
    if (count)
        count.textContent = `${active + 1} / ${RAIL.length}`;
    rail.classList.toggle('scrolled', window.scrollY > 80);
    rail.classList.toggle('on-dark', active <= 1 || active === RAIL.length - 1);
}
window.addEventListener('scroll', () => { if (state.route.name === 'landing')
    updateRail(); }, { passive: true });
window.addEventListener('resize', () => { if (state.route.name === 'landing')
    updateRail(); });
function renderLanding() {
    const stats = [
        [12480, '', 'Students planning with Veyra', 'user'],
        [38900, '', 'Assessments broken down', 'layers'],
        [214, 'k', 'Rubric lines turned into checklists', 'check'],
        [92, '%', 'Say they understand the task better', 'target'],
    ];
    return `<div class="landing">
    ${scrollRail()}
    <div class="first-screen">
    <section class="hero" id="top" data-rail="0">
      ${state.look.art ? mountains('dusk') : ''}
      <div class="hero-shade"></div>
      <header class="lnav">${wordmark('on-dark')}<div class="lnav-r"><button class="btn ghost-dark" data-action="go" data-to="dashboard">Log in</button><button class="btn primary" data-action="go" data-to="onboarding">Get started</button></div></header>
      <div class="hero-body">
        <p class="eyebrow">Your assessment. Our system.</p>
        <h1>Smarter support for your biggest <span>assignments.</span></h1>
        <p class="lead">Veyra turns any assessment or exam into a personalised, step-by-step system. It tells you what you need to do, plans your time and tracks your progress. You do the writing.</p>
        <ul class="hero-list"><li>${icon('calendar')}Personalised study plans</li><li>${icon('sparkle')}Guidance, not just answers</li><li>${icon('chart')}Track your progress</li></ul>
        <div class="hero-cta"><button class="btn primary lg" data-action="go" data-to="onboarding">Get started ${icon('arrowR')}</button><button class="btn ghost-dark lg" data-action="go" data-to="dashboard">See the demo dashboard</button></div>
      </div>
      <p class="hero-foot">Better preparation. Greater confidence.</p>
    </section>

    <section class="l-stats" data-rail="1">
      <div class="l-wrap stats-row">${stats.map(([n, suf, label, ic], i) => `<div class="lstat rv" data-rv="stat${i}" style="--d:${i * 0.08}s"><span class="lstat-ic">${icon(ic)}</span><b><span data-count="${n}" data-suf="${suf}">${num(n)}${suf}</span></b><small>${label}</small></div>`).join('')}</div>
      <p class="l-wrap demo-note">Preview figures for this prototype</p>
    </section>
    </div>

    <section class="l-sec journey-sec" id="how" data-rail="2">
      <div class="l-wrap">
        <div class="l-head rv" data-rv="jh"><p class="eyebrow">How it works</p><h2>From “what is this even asking?” to done</h2><p class="l-sub">Every assessment follows the same path inside Veyra, whether it’s an essay, a report or an exam.</p></div>
        <div class="jr">
          <div class="jr-stage"><div class="jr-card">
            <div class="jr-top"><span class="jr-n" data-jn>01</span><span class="jr-t" data-jt>${JOURNEY[0].t}</span><span class="jr-meter"><i data-jm style="width:12.5%"></i></span></div>
            <div class="jr-vis">${JOURNEY.map((_, i) => `<div class="jv${i === 0 ? ' on' : ''}" data-jv="${i}" data-jvi="${i}" data-where="s">${journeyVisual(i, 's')}</div>`).join('')}</div>
            <div class="jr-foot"><div class="jr-dots">${JOURNEY.map((j, i) => `<button class="${i === 0 ? 'on' : ''}" data-action="jstep" data-i="${i}" aria-label="Step ${i + 1}: ${j.t}" title="${j.t}"></button>`).join('')}</div><span class="jr-hint">Scroll to step through</span><button class="link sm" data-action="jskip">Skip ${icon('chevD')}</button></div>
          </div></div>
          <ol class="jr-steps">${JOURNEY.map((j, i) => `<li class="jr-step${i === 0 ? ' on' : ''}" data-step="${i}"><span class="jr-dot">${icon(j.ic)}</span><div><small>Step ${i + 1}</small><h3>${j.t}</h3><p>${j.d}</p><div class="jr-inline" data-jvi="${i}" data-where="m">${journeyVisual(i, 'm')}</div></div></li>`).join('')}</ol>
        </div>
      </div>
    </section>

    <section class="l-sec alt" id="after-how" data-rail="3">
      <div class="l-wrap rubric-demo">
        <div class="rd-copy rv" data-rv="rdc"><p class="eyebrow">The rubric, translated</p><h2>Vague criteria become things you can actually tick</h2><p class="l-sub">Rubrics say things like “persuasively demonstrates suitability”. Veyra turns each line into plain checklist items and puts them in the sections where they matter.</p></div>
        <div class="rd-flow rv" data-rv="rdf">
          <div class="rd-rubric"><small>Rubric says</small><p>“Persuasively demonstrates suitability for the advertised position.”</p></div>
          <div class="rd-arrow">${logo('sm')}<span></span></div>
          <ul class="rd-list"><li style="--n:0"><span class="box">${icon('check')}</span>Match your skills to what the ad asks for</li><li style="--n:1"><span class="box">${icon('check')}</span>Back each skill with a real example</li><li style="--n:2"><span class="box">${icon('check')}</span>Say why that makes you the best fit</li><li style="--n:3"><span class="box">${icon('check')}</span>Keep a confident, professional tone</li></ul>
        </div>
      </div>
    </section>

    <section class="l-sec" data-rail="4">
      <div class="l-wrap write-demo">
        <div class="wd-card rv" data-rv="wd">
          <div class="wd-h"><span><b>Part A · Why this job suits you</b><small>PDHPE Job Application</small></span><span class="wd-pct"><span class="bar"><i data-wbar style="width:78%"></i></span><b data-wpct>78%</b></span></div>
          <p class="wd-text" data-type>My Career Profile Report showed that my top interests are health science and sport, which is why a career as a sports physiotherapist would <mark class="sp">definately</mark> suit me.</p>
          <div class="wd-f"><span class="wd-wc"><b data-wwc>29</b> / 150 words</span><span class="wd-sug">${icon('sparkle')}1 spelling suggestion</span></div>
        </div>
        <div class="wd-copy rv" data-rv="wdc"><p class="eyebrow">You write it</p><h2>Your words. Veyra keeps you on track.</h2><p class="l-sub">A focused writing space for each section. Word counts that inform without nagging, underlines you can accept or ignore, and progress based on what the rubric asks for, not how much you’ve typed.</p>
          <ul class="ticks"><li>${icon('check')}No pop-ups or blocking warnings</li><li>${icon('check')}Red for spelling, blue for grammar</li><li>${icon('check')}You mark sections complete, not the AI</li></ul></div>
      </div>
    </section>

    <section class="l-sec alt" data-rail="5">
      <div class="l-wrap">
        <div class="l-head rv" data-rv="ph"><p class="eyebrow">What we care about</p><h2>Built around you, not around a chatbot</h2></div>
        <div class="pillars">
          <div class="pillar rv" data-rv="p0" style="--d:0s"><span class="p-ic">${icon('user')}</span><h3>Personalised</h3><p>Built around your deadline, your other assessments, your holidays and the way you like to study.</p></div>
          <div class="pillar rv" data-rv="p1" style="--d:.1s"><span class="p-ic">${icon('sparkle')}</span><h3>Intelligent</h3><p>Reads the rubric and turns vague wording into checklist items, then explains concepts and finds sources when you ask.</p></div>
          <div class="pillar rv" data-rv="p2" style="--d:.2s"><span class="p-ic">${icon('target')}</span><h3>Focused</h3><p>One section at a time and a plan for today, so a big assessment never feels like one big wall.</p></div>
        </div>
      </div>
    </section>

    <section class="l-sec meet" data-rail="6">
      <div class="l-wrap meet-in">
        <div class="meet-copy rv" data-rv="mc">
          <p class="eyebrow meet-eye">${atlas('av')}Meet Atlas</p><h2>Your study assistant, built into every assessment</h2>
          <p class="l-sub">Atlas knows your task, your rubric, your year level and where you’re up to. Ask him to explain, find sources or check what’s left. Ask him to write it for you and he’ll help you start instead.</p>
          <div class="meet-chat" aria-live="polite">
            <div class="meet-q" data-meet-q>${esc(MEET[atlasDemo][0])}</div>
            <div class="meet-a">${atlas('av')}<p data-meet-a>${MEET[atlasDemo][1]}</p></div>
          </div>
          <div class="meet-chips">${MEET.map((m, i) => `<button class="chip${i === atlasDemo ? ' on' : ''}" data-action="atlas-demo" data-i="${i}">${esc(m[0])}</button>`).join('')}</div>
        </div>
        <div class="rv" data-rv="prem" style="--d:.12s">${premiumCard()}</div>
      </div>
    </section>

    <section class="l-sec alt" data-rail="7">
      <div class="l-wrap">
        <div class="l-head rv" data-rv="sh"><p class="eyebrow">Our promise</p><h2>AI that helps you think, not think for you</h2></div>
        <div class="split">
          <div class="promise can rv" data-rv="can" style="--d:0s"><h3><span class="pr-ic">${icon('check')}</span>Veyra will</h3><ul>${[['Explain concepts and rubric language', 'sparkle'], ['Find sources for you to read', 'link'], ['Plan your time around real life', 'calendar'], ['Quiz you and build practice questions', 'quiz'], ['Check spelling and grammar', 'pen']].map(([x, ic], i) => `<li style="--n:${i}"><span class="li-ic">${icon(ic)}</span>${x}</li>`).join('')}</ul></div>
          <div class="promise wont rv" data-rv="wont" style="--d:.1s"><h3><span class="pr-ic">${icon('lock')}</span>Veyra won’t</h3><ul>${['Write your essay', 'Generate paragraphs to submit', 'Complete the assessment for you', 'Replace your thinking'].map((x, i) => `<li style="--n:${i}"><span class="li-ic">${icon('x')}</span>${x}</li>`).join('')}</ul><p class="pr-foot">Your work stays yours.</p></div>
        </div>
      </div>
    </section>

    <section class="closer-sec" data-rail="8">
      ${state.look.art ? mountains('night') : ''}
      <div class="closer rv" data-rv="cl"><p>“I actually understood what I was supposed to do, I knew what to work on, and I did the work myself.”</p><button class="btn primary lg" data-action="go" data-to="onboarding">Start your first assessment ${icon('arrowR')}</button></div>
    </section>
    <footer class="l-foot">${wordmark()}<span>Prototype · designed by Leni Hourahine</span></footer>
  </div>`;
}
// ---- landing scroll effects
const landSeen = new Set();
let landObs = null;
let stepObs = null;
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function countUp(el) {
    var _a;
    const target = Number(el.dataset.count);
    const suf = (_a = el.dataset.suf) !== null && _a !== void 0 ? _a : '';
    if (reduceMotion()) {
        el.textContent = num(target) + suf;
        return;
    }
    const start = performance.now();
    const dur = 1600;
    const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = num(Math.round(target * e)) + suf;
        if (p < 1)
            requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}
function typeDemo(card) {
    var _a;
    const p = card.querySelector('[data-type]');
    const wc = card.querySelector('[data-wwc]');
    const wbar = card.querySelector('[data-wbar]');
    const wpct = card.querySelector('[data-wpct]');
    if (!p || !wc || !wbar || !wpct || reduceMotion())
        return;
    const html = p.innerHTML;
    const full = (_a = p.textContent) !== null && _a !== void 0 ? _a : '';
    const total = words(full);
    let i = 0;
    card.classList.add('typing');
    const step = () => {
        i = Math.min(full.length, i + 2);
        const shown = full.slice(0, i);
        p.textContent = shown;
        const n = words(shown);
        wc.textContent = String(n);
        const pc = Math.round(40 + (n / total) * 38);
        wbar.style.width = `${pc}%`;
        wpct.textContent = `${pc}%`;
        if (i < full.length)
            window.setTimeout(step, 28);
        else {
            p.innerHTML = html;
            card.classList.remove('typing');
            card.classList.add('typed');
        }
    };
    wbar.style.width = '40%';
    wpct.textContent = '40%';
    p.textContent = '';
    wc.textContent = '0';
    window.setTimeout(step, 300);
}
function reveal(el) {
    var _a;
    el.classList.add('in');
    window.setTimeout(() => el.classList.add('settled'), 1300);
    const id = (_a = el.dataset.rv) !== null && _a !== void 0 ? _a : '';
    const fresh = !landSeen.has(id);
    landSeen.add(id);
    if (!fresh)
        return;
    el.querySelectorAll('[data-count]').forEach(countUp);
    if (id === 'wd')
        typeDemo(el);
}
function setStep(i) {
    const root = app.querySelector('.jr');
    if (!root)
        return;
    root.querySelectorAll('.jr-step').forEach(s => s.classList.toggle('on', Number(s.dataset.step) === i));
    root.querySelectorAll('.jr-step').forEach(s => s.classList.toggle('past', Number(s.dataset.step) < i));
    root.querySelectorAll('[data-jv]').forEach(v => {
        const on = Number(v.dataset.jv) === i;
        if (on && !v.classList.contains('on')) {
            v.classList.add('enter');
            window.setTimeout(() => v.classList.remove('enter'), 1200);
            v.querySelectorAll('.ring').forEach(rg => animateRing(rg, 0));
        }
        v.classList.toggle('on', on);
    });
    const n = root.querySelector('[data-jn]');
    if (n)
        n.textContent = String(i + 1).padStart(2, '0');
    const t = root.querySelector('[data-jt]');
    if (t)
        t.textContent = JOURNEY[i].t;
    const m = root.querySelector('[data-jm]');
    if (m)
        m.style.width = `${((i + 1) / JOURNEY.length) * 100}%`;
    root.querySelectorAll('.jr-dots button').forEach((d, n) => { d.classList.toggle('on', n === i); d.classList.toggle('past', n < i); });
}
// ---- step-at-a-time scrolling through "How it works"
let jLock = false;
let jQuiet = 0;
let jSince = 0;
function stepEls() { return Array.from(app.querySelectorAll('.jr-step')); }
function centerOn(el) {
    const r = el.getBoundingClientRect();
    const y = window.scrollY + r.top + r.height / 2 - window.innerHeight / 2;
    window.scrollTo({ top: y, behavior: reduceMotion() ? 'auto' : 'smooth' });
}
let jProgUntil = 0; // ignore pass-through steps while we scroll to a chosen one
function goStep(i) {
    const el = stepEls()[i];
    if (!el)
        return;
    setStep(i);
    jProgUntil = performance.now() + 1100;
    centerOn(el);
}
/** Returns true when the gesture was used to move one step (so normal scrolling is cancelled). */
function journeyGesture(dir, small = false) {
    if (!dir)
        return false;
    if (state.route.name !== 'landing' || window.innerWidth <= 900)
        return false;
    const jr = app.querySelector('.jr');
    if (!jr)
        return false;
    const vh = window.innerHeight;
    const r = jr.getBoundingClientRect();
    if (!(r.top < vh * 0.55 && r.bottom > vh * 0.45))
        return false;
    if (jLock) {
        jSince = performance.now();
        return true;
    }
    const steps = stepEls();
    let near = 0;
    let best = Infinity;
    steps.forEach((s, n) => {
        const b = s.getBoundingClientRect();
        const d = Math.abs(b.top + b.height / 2 - vh / 2);
        if (d < best) {
            best = d;
            near = n;
        }
    });
    const nb = steps[near].getBoundingClientRect();
    const off = nb.top + nb.height / 2 - vh / 2;
    let target = near + dir;
    if ((dir > 0 && off > 40) || (dir < 0 && off < -40))
        target = near;
    if (target < 0 || target >= steps.length)
        return false;
    // a trackpad's small drift movements are swallowed so the page stays centred on the step
    if (small)
        return true;
    jLock = true;
    jSince = performance.now();
    goStep(target);
    const release = () => {
        // stay locked while a trackpad is still sending momentum events
        if (performance.now() - jSince < 220) {
            jQuiet = window.setTimeout(release, 120);
            return;
        }
        jLock = false;
    };
    window.clearTimeout(jQuiet);
    jQuiet = window.setTimeout(release, 650);
    return true;
}
// Wheel and trackpad. A mouse wheel sends big jumps; a trackpad sends lots of tiny movements, then keeps
// "coasting" after you lift your fingers. Tiny movements are added up until they make a real scroll, and the
// coasting after a step is swallowed so the page stays centred on that step.
let jAcc = 0;
let jLast = 0;
let jPrevAbs = 0;
let jLockedAt = 0;
function inJourney() {
    if (state.route.name !== 'landing' || window.innerWidth <= 900)
        return false;
    const jr = app.querySelector('.jr');
    if (!jr)
        return false;
    const r = jr.getBoundingClientRect();
    return r.top < window.innerHeight * 0.55 && r.bottom > window.innerHeight * 0.45;
}
window.addEventListener('wheel', e => {
    if (e.ctrlKey || !e.deltaY)
        return;
    // let a scrollable preview (like the Understand brief) scroll itself first
    const box = e.target.closest('.ub, .jv-ed textarea');
    if (box && box.scrollHeight > box.clientHeight + 2) {
        const atTop = box.scrollTop <= 0;
        const atEnd = box.scrollTop + box.clientHeight >= box.scrollHeight - 2;
        if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atTop))
            return;
    }
    const now = performance.now();
    const abs = Math.abs(e.deltaY);
    if (now - jLast > 250)
        jAcc = 0;
    jLast = now;
    // a new swipe while the last one is still coasting: movement suddenly gets bigger again
    const fresh = jLock && now - jLockedAt > 650 && abs >= 8 && abs > jPrevAbs * 1.6;
    jPrevAbs = abs;
    if (fresh)
        jLock = false;
    if (jLock) {
        if (inJourney()) {
            jSince = now;
            e.preventDefault();
        }
        return;
    }
    jAcc += e.deltaY;
    if (Math.abs(jAcc) < 24) {
        if (journeyGesture(Math.sign(e.deltaY), true))
            e.preventDefault();
        return;
    }
    jAcc = 0;
    if (journeyGesture(Math.sign(e.deltaY))) {
        jLockedAt = now;
        e.preventDefault();
    }
}, { passive: false });
let touchY = 0;
let touchUsed = false;
window.addEventListener('touchstart', e => { touchY = e.touches[0].clientY; touchUsed = false; }, { passive: true });
window.addEventListener('touchmove', e => {
    const dy = touchY - e.touches[0].clientY;
    if (touchUsed) {
        e.preventDefault();
        return;
    }
    if (Math.abs(dy) > 24 && journeyGesture(Math.sign(dy))) {
        touchUsed = true;
        e.preventDefault();
    }
}, { passive: false });
window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && decodeOpen) {
        decodeOpen = false;
        render();
        return;
    }
    const t = e.target;
    if (t.closest('input, textarea, select, [contenteditable]'))
        return;
    const dir = ['ArrowDown', 'PageDown', ' '].includes(e.key) ? (e.shiftKey && e.key === ' ' ? -1 : 1) : ['ArrowUp', 'PageUp'].includes(e.key) ? -1 : 0;
    if (dir && journeyGesture(dir))
        e.preventDefault();
});
function setupLanding() {
    landObs === null || landObs === void 0 ? void 0 : landObs.disconnect();
    stepObs === null || stepObs === void 0 ? void 0 : stepObs.disconnect();
    if (state.route.name !== 'landing')
        return;
    updateRail();
    // stats count up straight away when the page opens
    app.querySelectorAll('.lstat').forEach(reveal);
    const items = app.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('in'));
        return;
    }
    document.documentElement.classList.add('anim-ready');
    items.forEach(el => { var _a; if (landSeen.has((_a = el.dataset.rv) !== null && _a !== void 0 ? _a : ''))
        el.classList.add('in', 'instant', 'settled'); });
    app.querySelectorAll('.l-stats .rv').forEach(el => { if (!el.classList.contains('in'))
        reveal(el); });
    landObs = new IntersectionObserver(entries => {
        for (const e of entries)
            if (e.isIntersecting) {
                reveal(e.target);
                landObs === null || landObs === void 0 ? void 0 : landObs.unobserve(e.target);
            }
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
    items.forEach(el => { if (!el.classList.contains('in'))
        landObs === null || landObs === void 0 ? void 0 : landObs.observe(el); });
    stepObs = new IntersectionObserver(entries => {
        for (const e of entries)
            if (e.isIntersecting && performance.now() > jProgUntil)
                setStep(Number(e.target.dataset.step));
    }, { rootMargin: '-45% 0px -45% 0px' });
    app.querySelectorAll('.jr-step').forEach(s => stepObs === null || stepObs === void 0 ? void 0 : stepObs.observe(s));
}
function landingScroll() {
    if (state.route.name !== 'landing' || reduceMotion())
        return;
    const y = window.scrollY;
    const art = app.querySelector('.hero .mtn');
    if (art && y < 1000)
        art.style.transform = `translateY(${y * 0.28}px) scale(${1 + y * 0.00012})`;
}
window.addEventListener('scroll', landingScroll, { passive: true });
// ---------------------------------------------------------------- onboarding
const SUBJECTS = ['English', 'Mathematics', 'Science', 'History', 'Geography', 'PDHPE', 'Business', 'Visual Arts', 'Music', 'Languages'];
const GOALS = ['Improve my grades', 'Prepare for exams', 'Better understand my assessment', 'Build study habits', 'Stop leaving things to the last minute'];
const PREP = ['Notes', 'Flashcards', 'Practice questions', 'Past papers', 'Teaching someone else', 'Mind maps', 'Something else'];
function chips(field, opts, multi = true) {
    const cur = state.onb[field];
    return `<div class="chips-row">${opts.map(o => {
        const on = multi ? cur.includes(o) : cur === o;
        return `<button class="chip-opt${on ? ' on' : ''}" data-action="${multi ? 'onb-toggle' : 'onb-pick'}" data-field="${field}" data-value="${esc(o)}" aria-pressed="${on}">${on && multi ? icon('check') : ''}${esc(o)}</button>`;
    }).join('')}</div>`;
}
function scale(field, lo, hi) {
    const v = state.onb[field];
    return `<div class="scale">${[1, 2, 3, 4, 5].map(n => `<button class="${n === v ? 'on' : ''}" data-action="onb-pick" data-field="${field}" data-value="${n}" aria-pressed="${n === v}">${n}</button>`).join('')}</div><div class="scale-l"><span>${lo}</span><span>${hi}</span></div>`;
}
let onbAnim = 'fwd';
function qo(field, value, label, i, opts = {}) {
    const cur = state.onb[field];
    const on = opts.multi ? cur.includes(value) : String(cur) === value;
    return `<button class="qo${on ? ' on' : ''}${opts.big ? ' big' : ''}" style="--i:${i}" data-action="${opts.multi ? 'onb-toggle' : 'onb-pick'}" data-field="${field}" data-value="${esc(value)}" aria-pressed="${on}">
    <span class="qo-k">${i < 9 ? i + 1 : ''}</span>${opts.ic ? `<span class="qo-ic">${icon(opts.ic)}</span>` : ''}<b>${esc(label)}</b>${opts.sub ? `<small>${esc(opts.sub)}</small>` : ''}<span class="qo-tick">${icon('check')}</span></button>`;
}
const QS = [
    { key: 'year', part: 'About you', ask: 'What year are you in?', sub: 'So Atlas explains things at the right level.', auto: true,
        body: () => `<div class="qo-grid g4">${['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'University', 'TAFE / College'].map((y, i) => qo('year', y, y, i)).join('')}</div>`,
        react: o => `${o.year}. Nice. I’ll pitch everything at that level.` },
    { key: 'subjects', part: 'About you', ask: 'What are you studying?', sub: 'Pick as many as you like.',
        body: () => `<div class="qo-grid g5 compact">${SUBJECTS.map((s, i) => qo('subjects', s, s, i, { multi: true })).join('')}</div>`,
        react: o => o.subjects.length ? `${o.subjects.length} subject${o.subjects.length === 1 ? '' : 's'}. I’ll keep them all in one place for you.` : 'Tap every subject you take this year.' },
    { key: 'goals', part: 'About you', ask: 'What are your main goals?', sub: 'Choose any that sound like you.',
        body: () => `<div class="qo-grid g3">${GOALS.map((g, i) => qo('goals', g, g, i, { multi: true, ic: ['trophy', 'flask', 'sparkle', 'calendar', 'clock'][i] })).join('')}</div>`,
        react: o => o.goals.includes('Stop leaving things to the last minute') ? 'No more “oh no, it’s due tomorrow”. I’ve got you.' : o.goals.length ? 'Great goals. Your plan will be built around them.' : 'What do you want Veyra to help with most?' },
    { key: 'files', part: 'Your resources', ask: 'Add what you’ve got', sub: 'The notification, rubric, scaffold, slides or notes. There’s no required set.',
        body: o => `<label class="qz-drop" id="onb-drop"><input type="file" id="onb-files" multiple hidden><span class="qz-drop-ic">${icon('upload')}</span><b>Drop files here or click to browse</b><small>PDF, Word, slides or images</small></label>
      ${o.files.length ? `<ul class="qz-files">${o.files.map((f, i) => `<li style="--i:${i}">${icon('file')}<span>${esc(f.name)}</span><select data-file="${i}" aria-label="File type">${['Notification', 'Rubric', 'Scaffold', 'Instructions', 'Worksheet', 'Slides', 'Notes', 'Other'].map(k => `<option${k === f.kind ? ' selected' : ''}>${k}</option>`).join('')}</select><button class="icon-btn" data-action="onb-rmfile" data-i="${i}" aria-label="Remove ${esc(f.name)}">${icon('x')}</button></li>`).join('')}</ul>` : `<button class="qz-link" data-action="onb-sample">Add the sample PDHPE files</button>`}`,
        react: o => o.files.length ? `${o.files.length} file${o.files.length === 1 ? '' : 's'}. I’ll read ${o.files.length === 1 ? 'it' : 'them'} and pull out what matters.` : 'Whatever you have is enough. Even just the notification works.' },
    { key: 'title', part: 'The assessment', ask: 'What’s the assessment called?', sub: 'And which subject is it for?',
        body: o => `<input class="qz-input" id="onb-title" data-onb="title" value="${esc(o.title)}" placeholder="e.g. Job Application and Analysis" autocomplete="off">
      <div class="qo-grid g5 compact">${SUBJECTS.map((s, i) => qo('subject', s, s, i)).join('')}</div>`,
        check: o => o.title.trim() ? '' : 'Give it a name so you can find it later.',
        react: o => o.title.trim() ? `“${o.title.trim()}”. Got it.` : 'Use the name on your notification so it’s easy to spot.' },
    { key: 'kind', part: 'The assessment', ask: 'What type of assessment is it?', sub: 'Veyra builds a different structure for each.', auto: true,
        body: () => `<div class="qo-grid g4">${['essay', 'report', 'presentation', 'exam'].map((k, i) => qo('kind', k, KIND_LABEL[k], i, { ic: KIND_ICON[k], big: true, sub: ['Intro, body, conclusion', 'Sections and evidence', 'Script and delivery', 'Revise and practise'][i] })).join('')}</div>`,
        react: o => o.kind === 'exam' ? 'An exam. I’ll focus on what to know and practise.' : `${o.kind === 'essay' ? 'An' : 'A'} ${KIND_LABEL[o.kind].toLowerCase()}. I’ll split it into manageable sections.` },
    { key: 'due', part: 'The assessment', ask: 'When is it due?', sub: 'Your plan counts back from this date.',
        body: o => `<div class="qz-row"><label class="qz-field"><span>${o.kind === 'exam' ? 'Exam date' : 'Due date'}</span><input type="date" class="qz-input sm" id="onb-due" data-onb="due" value="${o.due}" min="${isoDay(today())}"></label>
      ${o.kind !== 'exam' ? `<label class="qz-field"><span>Word limit</span><input type="number" class="qz-input sm" id="onb-words" data-onb="words" value="${o.words}" min="0" step="50"></label>` : ''}</div>`,
        check: o => daysUntil(parseIso(o.due)) < 1 ? 'Pick a date from tomorrow onwards.' : '',
        react: o => { const n = daysUntil(parseIso(o.due)); return n < 1 ? 'That date has already passed.' : n <= 7 ? `${n} days. Tight, but we can do it together.` : `${n} days to go. Plenty of time if we start now.`; } },
    { key: 'confidence', part: 'Your situation', ask: 'How confident are you with this subject?', sub: 'Be honest. It changes how much Atlas explains.', auto: true,
        body: () => `<div class="qo-grid g5">${['Lost', 'Unsure', 'Okay', 'Confident', 'Very confident'].map((l, i) => qo('confidence', String(i + 1), l, i, { sub: String(i + 1), big: true })).join('')}</div>`,
        react: o => o.confidence <= 2 ? 'Thanks for being honest. I’ll explain more and start you early.' : o.confidence >= 4 ? 'Nice. I’ll keep explanations short and focus on the rubric.' : 'Okay is a great place to start.' },
    { key: 'started', part: 'Your situation', ask: 'How much have you started?', sub: '', auto: true,
        body: () => `<div class="qo-grid g4">${['Not yet', 'A little', 'About half', 'Most of it'].map((l, i) => qo('started', l, l, i, { big: true, ic: ['flame', 'pen', 'layers', 'trophy'][i] })).join('')}</div>`,
        react: o => o.started === 'Not yet' ? 'Everyone starts at zero. Step one is tiny, I promise.' : `${o.started}. Next, show me what you’ve done so far.` },
    { key: 'draft', part: 'Your situation', ask: 'Add what you’ve done so far', sub: 'Drag in your drafts, notes or anything you’ve already started. Veyra will pick up where you left off.',
        when: o => o.started !== 'Not yet',
        body: o => `<label class="qz-drop" id="onb-draft-drop"><input type="file" id="onb-draft-files" multiple hidden><span class="qz-drop-ic">${icon('pen')}</span><b>Drop your work so far here or click to browse</b><small>Word docs, Google Docs exports, PDFs, notes or photos of your work</small></label>
      ${o.drafts.length ? `<ul class="qz-files">${o.drafts.map((f, i) => `<li style="--i:${i}">${icon('file')}<span>${esc(f.name)}</span><button class="icon-btn" data-action="onb-rmdraft" data-i="${i}" aria-label="Remove ${esc(f.name)}">${icon('x')}</button></li>`).join('')}</ul>` : `<button class="qz-link" data-action="onb-sample-draft">Add a sample draft</button>`}`,
        react: o => o.drafts.length ? `Got it. I’ll put your work into the right sections and tick off what’s already done.` : 'Even rough notes help. You can skip this if it’s easier.' },
    { key: 'hours', part: 'Your situation', ask: 'How many hours a week can you give it?', sub: 'Realistically, alongside school, sport and everything else.',
        body: o => `<div class="qz-hours"><b id="onb-hours-out">${o.hours}<small>h</small></b><input type="range" class="qz-range" id="onb-hours" data-onb="hours" min="1" max="15" value="${o.hours}" aria-label="Hours per week"><div class="qz-range-l"><span>1h</span><span>15h</span></div></div>`,
        react: o => o.hours <= 2 ? 'Short on time. I’ll keep each session small and focused.' : o.hours >= 8 ? 'That’s a lot of time. You’ll be ahead of schedule.' : 'A solid amount. That’s about 30–60 minutes a day.' },
    { key: 'busy', part: 'Your situation', ask: 'Any days you’re short on time?', sub: 'Sport, work, family. Your plan will go easy on these days.',
        body: o => `<div class="qo-grid g7">${[1, 2, 3, 4, 5, 6, 0].map((d, i) => `<button class="qo day${o.busy.includes(d) ? ' on' : ''}" style="--i:${i}" data-action="onb-busy" data-value="${d}" aria-pressed="${o.busy.includes(d)}"><b>${WD[d]}</b><span class="qo-tick">${icon('check')}</span></button>`).join('')}</div>`,
        react: o => o.busy.length ? `Noted. I’ll keep ${o.busy.map(d => WD_LONG[d]).join(' and ')} light.` : 'Every day is fair game. Tap any day that’s busy.' },
    { key: 'away', part: 'Your situation', ask: 'Going away before it’s due?', sub: 'Holidays, camps, trips.',
        body: o => `<div class="qo-grid g2"><button class="qo big${!o.away ? ' on' : ''}" style="--i:0" data-action="onb-away" data-value="0"><span class="qo-k">1</span><span class="qo-ic">${icon('home')}</span><b>No, I’m around</b><span class="qo-tick">${icon('check')}</span></button><button class="qo big${o.away ? ' on' : ''}" style="--i:1" data-action="onb-away" data-value="1"><span class="qo-k">2</span><span class="qo-ic">${icon('sun')}</span><b>Yes, I’m going away</b><span class="qo-tick">${icon('check')}</span></button></div>
      ${o.away ? `<div class="qz-row pop"><label class="qz-field"><span>From</span><input type="date" class="qz-input sm" id="onb-af" data-onb="awayFrom" value="${o.awayFrom}"></label><label class="qz-field"><span>To</span><input type="date" class="qz-input sm" id="onb-at" data-onb="awayTo" value="${o.awayTo}"></label></div>` : ''}`,
        react: o => o.away ? 'Enjoy it! I’ll plan around those days so you’re not stressed.' : 'Great, the whole run-up is available.' },
    { key: 'prep', part: 'How you study', ask: 'How do you normally prepare?', sub: 'Pick everything you use.', when: o => o.kind === 'exam',
        body: () => `<div class="qo-grid g4">${PREP.map((p, i) => qo('prep', p, p, i, { multi: true, ic: ['pen', 'cards', 'quiz', 'file', 'user', 'layers', 'sparkle'][i] })).join('')}</div>`,
        react: o => o.prep.length ? `${o.prep.slice(0, 2).join(' and ')}${o.prep.length > 2 ? ' and more' : ''}. I’ll suggest tools that match.` : 'No wrong answers here.' },
    { key: 'strict', part: 'How you study', ask: 'How strict is your teacher when marking?', sub: '', auto: true,
        body: () => `<div class="qo-grid g5">${['Relaxed', 'Fair', 'Average', 'Strict', 'Very strict'].map((l, i) => qo('strict', String(i + 1), l, i, { sub: String(i + 1), big: true })).join('')}</div>`,
        react: o => o.strict >= 4 ? 'Strict marker. I’ll make sure every rubric point is covered.' : 'Good to know. I’ll still check everything against the rubric.' },
    { key: 'teacher', part: 'How you study', ask: 'Anything your teacher has emphasised?', sub: 'Optional. Things like “must use footnotes” or “keep the video under a minute”.',
        body: o => `<textarea class="qz-input area" id="onb-teacher" data-onb="teacher" rows="3" placeholder="Type anything your teacher said…">${esc(o.teacher)}</textarea>`,
        react: o => o.teacher.trim() ? 'Perfect. I’ll keep that in mind the whole way through.' : 'Last one! Skip it if nothing comes to mind.' },
];
// Answers to pick when demoing with the PDHPE task (shown in red for the presenter)
const DEMO_ANSWERS = {
    year: 'Year 10',
    subjects: 'PDHPE (plus your other subjects)',
    goals: 'Better understand my assessment + Stop leaving things to the last minute',
    files: 'Click “Add the sample PDHPE files”',
    title: 'Type “Job Application and Analysis”, then pick PDHPE',
    kind: 'Report',
    due: '28/10/2026 (Week 3, Term 4), word limit 150',
    confidence: '3 · Okay',
    started: 'Not yet',
    draft: 'Only appears if you’ve started. Drag in your draft here',
    hours: '4h',
    busy: 'Wed',
    away: 'No, I’m around',
    prep: 'Notes + Something else',
    strict: '4 · Strict',
    teacher: 'Parts A and B go through Turnitin on Canvas. Part C is a file upload. The video must be 50–65 seconds.',
};
const QPARTS = ['About you', 'Your resources', 'The assessment', 'Your situation', 'How you study'];
const QQUOTES = {
    'About you': 'Progress isn’t about being perfect, it’s about being better than yesterday.',
    'Your resources': 'Clear beats clever. Start with what’s being asked.',
    'The assessment': 'A plan you can see is a plan you can follow.',
    'Your situation': 'Real life counts. Your plan should too.',
    'How you study': 'Study the way that works for you.',
};
const shown = (o, i) => { const q = QS[i]; return !q || !q.when || q.when(o); };
const visibleQs = (o) => QS.filter((_, i) => shown(o, i));
function onbNext() {
    var _a, _b;
    const o = state.onb;
    const q = QS[o.step];
    const err = (_b = (_a = q === null || q === void 0 ? void 0 : q.check) === null || _a === void 0 ? void 0 : _a.call(q, o)) !== null && _b !== void 0 ? _b : '';
    if (err) {
        o.error = err;
        render();
        return;
    }
    o.error = '';
    onbAnim = 'fwd';
    do {
        o.step++;
    } while (o.step < QS.length && !shown(o, o.step));
    render();
    window.scrollTo(0, 0);
}
function onbBack() {
    const o = state.onb;
    o.error = '';
    onbAnim = 'back';
    do {
        o.step--;
    } while (o.step > 0 && !shown(o, o.step));
    o.step = Math.max(0, o.step);
    render();
}
// ---------------------------------------------------------------- "Building your roadmap": pixel Atlas flying through pencils
const BUILD_STEPS = ['Reading your resources', 'Translating the task into plain language', 'Breaking it into sections', 'Turning the rubric into checklists', 'Planning around your week'];
function renderBuilding() {
    return `<div class="fly" id="fly">
    <canvas id="fly-cv" aria-hidden="true"></canvas>
    <div class="fly-ui">
      <p class="fly-kicker">Please wait</p>
      <h1 class="fly-title">Building your roadmap</h1>
      <p class="fly-step" data-fly-step>${BUILD_STEPS[0]}…</p>
      <div class="fly-bar" aria-hidden="true"><i data-fly-bar></i></div>
      <button class="fly-go" data-action="onb-finish" hidden data-fly-go>Open my roadmap ${icon('arrowR')}</button>
    </div>
    <div class="fly-score" data-fly-score hidden>0</div>
    <p class="fly-hint" data-fly-hint>Tap or press space to fly Atlas yourself</p>
  </div>`;
}
// ---------------------------------------------------------------- streak fire: a pixel fireball with flickering tongues
let fireRun = 0;
function startFire() {
    const cv = app.querySelector('[data-fire]');
    if (!cv || cv.dataset.on)
        return;
    cv.dataset.on = '1';
    const run = ++fireRun;
    const W = 22, H = 28;
    cv.width = W;
    cv.height = H;
    const g = cv.getContext('2d');
    const img = g.createImageData(W, H);
    // smooth value noise, scrolled upwards over time so the flames rise
    const hash = (x, y) => { const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return h - Math.floor(h); };
    const noise = (x, y) => {
        const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
        const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
        const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
        return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
    };
    // colour bands, outside in: dark red rim, red, orange, yellow, pale core
    const BANDS = [[0.80, [255, 250, 205, 255]], [0.62, [255, 214, 74, 255]], [0.42, [255, 150, 30, 255]], [0.22, [240, 78, 30, 255]], [0.08, [170, 34, 30, 255]]];
    const cx = (W - 1) / 2, cy = 18.5, R = 8.2;
    const sparks = [];
    const reduce = reduceMotion();
    let last = 0;
    const draw = (t) => {
        for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
                const up = cy - y; // height above the ball's centre
                const lift = Math.max(0, up) / (H * 0.7);
                const sway = Math.sin(y * 0.55 - t * 5.5) * 1.3 * lift + Math.sin(t * 2.3) * 0.6 * lift;
                const dx = x - cx - sway;
                const dy = up > 0 ? up * (0.48 + lift * 0.25) : up; // stretch the top into a flame, keep the bottom round
                const r = Math.sqrt(dx * dx + dy * dy) / R;
                const n = noise(x * 0.42, y * 0.42 + t * 4.2) * 0.55 + noise(x * 0.9 + 9, y * 0.9 + t * 7) * 0.25;
                const heat = 1.08 - r - (up > 0 ? n * (0.45 + lift) : n * 0.25) + 0.12;
                let col = [0, 0, 0, 0];
                for (const [th, c] of BANDS)
                    if (heat > th) {
                        col = c;
                        break;
                    }
                img.data.set(col, (y * W + x) * 4);
            }
        }
        // a few sparks drifting up
        if (Math.random() < 0.35)
            sparks.push({ x: cx + (Math.random() - 0.5) * 9, y: cy - 6, life: 1 });
        for (let k = sparks.length - 1; k >= 0; k--) {
            const sp = sparks[k];
            sp.y -= 1;
            sp.x += (Math.random() - 0.5) * 0.9;
            sp.life -= 0.14;
            if (sp.life <= 0 || sp.y < 0) {
                sparks.splice(k, 1);
                continue;
            }
            const xi = Math.round(sp.x), yi = Math.round(sp.y);
            if (xi >= 0 && xi < W && img.data[(yi * W + xi) * 4 + 3] === 0)
                img.data.set(sp.life > 0.5 ? [255, 214, 74, 255] : [240, 78, 30, 220], (yi * W + xi) * 4);
        }
        g.putImageData(img, 0, 0);
    };
    const frame = (now) => {
        if (run !== fireRun || !document.body.contains(cv))
            return;
        if (!reduce)
            requestAnimationFrame(frame);
        if (now - last < 70)
            return; // choppy on purpose, like pixel-art animation
        last = now;
        draw(now / 1000);
    };
    draw(0);
    requestAnimationFrame(frame);
}
/** Shrink a setup question just enough that the whole page fits the window with no scrolling. */
function fitQuiz() {
    const qz = app.querySelector('.qz-wrap .qz');
    const stage = qz === null || qz === void 0 ? void 0 : qz.querySelector('.qz-stage');
    if (!qz || !stage)
        return;
    stage.style.zoom = '';
    const phone = window.innerWidth <= 900;
    const min = phone ? 0.8 : 0.6;
    let z = 1;
    // measure the question itself (top-aligned while measuring), not the decorative glow around it
    stage.style.justifyContent = 'flex-start';
    const over = () => (phone ? document.documentElement.scrollHeight > window.innerHeight + 1 : stage.scrollHeight > stage.clientHeight + 1);
    for (let i = 0; i < 20 && over() && z > min; i++) {
        z *= 0.96;
        stage.style.zoom = String(z);
    }
    stage.style.justifyContent = '';
}
window.addEventListener('resize', () => { if (state.route.name === 'onboarding')
    fitQuiz(); });
/** Make the dashboard fill the window exactly: stretch it down when there's spare room (stopping just above
    any corner badge, like Netlify's), or shrink it slightly when the window is too short. */
const DASH_GAP = 52; // space kept free at the bottom of the window
function fitDash() {
    const pg = app.querySelector('.main > .page.dash');
    const grid = pg === null || pg === void 0 ? void 0 : pg.querySelector('.dash-grid');
    if (!pg || !grid)
        return;
    pg.style.zoom = '';
    grid.style.minHeight = '';
    if (window.innerWidth <= 900)
        return;
    const goal = window.innerHeight - DASH_GAP;
    const base = parseFloat(getComputedStyle(pg).zoom) || 1;
    let z = base;
    // too tall: shrink a little at a time
    for (let i = 0; i < 14 && pg.getBoundingClientRect().bottom > goal + 1 && z > base * 0.72; i++) {
        z *= 0.97;
        pg.style.zoom = String(z);
    }
    // room to spare: let the cards grow into it (measured twice, so browser zoom maths can't throw it off)
    for (let i = 0; i < 3; i++) {
        const spare = goal - pg.getBoundingClientRect().bottom;
        if (Math.abs(spare) < 2 || (spare < 0 && !grid.style.minHeight))
            break;
        const h = grid.getBoundingClientRect().height;
        const k = grid.offsetHeight / Math.max(1, h); // screen px to CSS px
        grid.style.minHeight = `${Math.max(0, (h + spare) * k)}px`;
    }
}
window.addEventListener('resize', () => { if (state.route.name === 'dashboard')
    fitDash(); });
let flyRun = 0;
function startFly() {
    const root = document.getElementById('fly');
    const cv = document.getElementById('fly-cv');
    if (!root || !cv || root.dataset.on)
        return;
    root.dataset.on = '1';
    const run = ++flyRun;
    const ctx = cv.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // low internal resolution, scaled up with crisp pixels
    const aspect0 = root.clientWidth / Math.max(1, root.clientHeight);
    const H = aspect0 < 1 ? Math.round(160 / aspect0 * 0.62) : 150; // taller world on portrait screens so pixels stay square
    let W = 260;
    const fit = () => { W = Math.max(90, Math.round(H * (root.clientWidth / Math.max(1, root.clientHeight)))); cv.width = W; cv.height = H; ctx.imageSmoothingEnabled = false; };
    fit();
    window.addEventListener('resize', fit);
    // shrink Atlas to a tiny sprite once, then draw it without smoothing so it reads as pixel art
    const sprite = document.createElement('canvas');
    let spriteReady = false;
    const img = new Image();
    img.onload = () => { sprite.width = 22; sprite.height = 22; const s = sprite.getContext('2d'); s.imageSmoothingQuality = 'high'; s.drawImage(img, 0, 0, 22, 22); spriteReady = true; };
    img.src = ATLAS_SRC;
    // world
    const GROUND = H - 16;
    const stars = Array.from({ length: 70 }, () => ({ x: Math.random() * 600, y: Math.random() * (H * 0.55), t: Math.random() * 6 }));
    const mtn = (seed, h) => Array.from({ length: 80 }, (_, i) => Math.round(h + Math.sin(i * 0.55 + seed) * 6 + Math.sin(i * 0.21 + seed * 2) * 9));
    const far = mtn(1, GROUND - 46);
    const near = mtn(4, GROUND - 26);
    const pipes = [];
    const GAP = 52;
    const SPACING = 92;
    const SPEED = 0.9;
    const bird = { x: 46, y: H * 0.42, vy: 0, size: 22, rot: 0 };
    let manual = false;
    let score = 0;
    let best = 0;
    let flash = 0;
    let worldX = 0;
    let idle = 0;
    const PENCIL = [['#F6C744', '#E0A82E'], ['#7CC0FF', '#4F95D9'], ['#FF8FA3', '#E06A80'], ['#8CE0A6', '#5DBB7D']];
    const spawn = (x) => pipes.push({ x, gap: 34 + Math.random() * (GROUND - 34 - GAP - 20), passed: false, hue: Math.floor(Math.random() * PENCIL.length) });
    for (let i = 0; i < 6; i++)
        spawn(W + 40 + i * SPACING);
    const flap = () => { bird.vy = -2.35; };
    const scoreEl = root.querySelector('[data-fly-score]');
    const hintEl = root.querySelector('[data-fly-hint]');
    const takeOver = (e) => {
        if (e.target.closest('.fly-go'))
            return;
        if (e instanceof KeyboardEvent && e.code !== 'Space' && e.key !== 'ArrowUp')
            return;
        e.preventDefault();
        if (!manual) {
            manual = true;
            score = 0;
            scoreEl.hidden = false;
            hintEl.textContent = 'Keep tapping to stay in the air';
        }
        idle = 0;
        flap();
    };
    root.addEventListener('pointerdown', takeOver);
    const onKey = (e) => { if (document.getElementById('fly'))
        takeOver(e); };
    window.addEventListener('keydown', onKey);
    const crash = () => {
        flash = 10;
        best = Math.max(best, score);
        bird.y = H * 0.42;
        bird.vy = 0;
        pipes.length = 0;
        for (let i = 0; i < 6; i++)
            spawn(W + 60 + i * SPACING);
        if (manual) {
            manual = false;
            score = 0;
            scoreEl.hidden = true;
            hintEl.textContent = best ? `Best: ${best}. Tap or press space to fly again` : 'Tap or press space to fly again';
        }
    };
    // build progress (simulated)
    const stepEl = root.querySelector('[data-fly-step]');
    const barEl = root.querySelector('[data-fly-bar]');
    const goEl = root.querySelector('[data-fly-go]');
    const started = performance.now();
    const BUILD_MS = 6500;
    const px = (x, y, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };
    const drawPencil = (x, top, end, hue) => {
        const [body, shade] = PENCIL[hue];
        const w = 18;
        if (top) {
            px(x, 0, w, end - 8, body);
            px(x + w - 5, 0, 5, end - 8, shade);
            px(x, 0, w, 6, '#C8CDD8');
            px(x, 6, w, 2, '#9AA3B5'); // metal band at the top edge
            px(x + 2, end - 8, w - 4, 3, '#F3D9B1');
            px(x + 5, end - 5, w - 10, 3, '#E8C99A');
            px(x + 7, end - 2, 4, 2, '#30364A'); // tip
        }
        else {
            const y = end;
            px(x + 7, y, 4, 2, '#30364A');
            px(x + 5, y + 2, w - 10, 3, '#E8C99A');
            px(x + 2, y + 5, w - 4, 3, '#F3D9B1');
            px(x, y + 8, w, GROUND - y - 8, body);
            px(x + w - 5, y + 8, 5, GROUND - y - 8, shade);
        }
    };
    let last = performance.now();
    const frame = (now) => {
        if (run !== flyRun || !document.body.contains(cv)) {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', fit);
            return;
        }
        const dt = Math.min(2.5, (now - last) / 16.67);
        last = now;
        // progress
        const p = Math.min(1, (now - started) / BUILD_MS);
        const si = Math.min(BUILD_STEPS.length - 1, Math.floor(p * BUILD_STEPS.length));
        barEl.style.width = `${Math.round(p * 100)}%`;
        if (p < 1)
            stepEl.textContent = `${BUILD_STEPS[si]}…`;
        else if (goEl.hidden) {
            stepEl.textContent = 'Your roadmap is ready!';
            goEl.hidden = false;
            root.classList.add('ready');
        }
        if (!reduce) {
            worldX += SPEED * dt;
            // physics
            bird.vy = Math.min(3.2, bird.vy + 0.12 * dt);
            bird.y += bird.vy * dt;
            if (manual) {
                idle += dt;
                if (idle > 600) {
                    manual = false;
                    scoreEl.hidden = true;
                    hintEl.textContent = 'Tap or press space to fly Atlas yourself';
                }
            }
            const next = pipes.find(pp => pp.x + 18 > bird.x - 4);
            if (!manual && next) {
                const target = next.gap + GAP / 2 + 4;
                if (bird.y > target && bird.vy > -0.4)
                    flap();
            }
            pipes.forEach(pp => { pp.x -= SPEED * dt; });
            while (pipes.length && pipes[0].x < -30) {
                pipes.shift();
                spawn(pipes[pipes.length - 1].x + SPACING);
            }
            // collisions
            const r = bird.size * 0.32;
            if (bird.y + r > GROUND || bird.y - r < 0)
                crash();
            for (const pp of pipes) {
                if (bird.x + r > pp.x && bird.x - r < pp.x + 18) {
                    if (bird.y - r < pp.gap || bird.y + r > pp.gap + GAP) {
                        crash();
                        break;
                    }
                }
                if (!pp.passed && pp.x + 18 < bird.x) {
                    pp.passed = true;
                    if (manual) {
                        score++;
                        scoreEl.textContent = String(score);
                    }
                }
            }
            bird.rot += ((Math.max(-0.5, Math.min(0.7, bird.vy * 0.22))) - bird.rot) * 0.2;
        }
        // ---- draw
        const sky = ctx.createLinearGradient(0, 0, 0, H);
        sky.addColorStop(0, '#0B1230');
        sky.addColorStop(0.6, '#24215A');
        sky.addColorStop(1, '#4A2F6E');
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, W, H);
        for (const s of stars) {
            const x = ((s.x - worldX * 0.05) % 600 + 600) % 600;
            if (x > W)
                continue;
            const on = Math.sin(now / 500 + s.t) > -0.3;
            px(x, s.y, 1, 1, on ? '#EAF0FF' : '#6D78A8');
        }
        px(W - 46, 18, 12, 12, '#F6E7B0');
        px(W - 42, 18, 8, 2, '#FFF6D8'); // pixel moon
        const drawRange = (arr, speed, col) => {
            const step = 8;
            const off = (worldX * speed) % step;
            const first = Math.floor((worldX * speed) / step);
            for (let i = -1; i * step < W + step; i++) {
                const h = arr[((first + i) % arr.length + arr.length) % arr.length];
                px(i * step - off, h, step + 1, GROUND - h, col);
            }
        };
        drawRange(far, 0.15, '#2D2A66');
        drawRange(near, 0.35, '#1E1C49');
        for (const pp of pipes) {
            drawPencil(pp.x, true, pp.gap, pp.hue);
            drawPencil(pp.x, false, pp.gap + GAP, pp.hue);
        }
        // ground
        px(0, GROUND, W, H - GROUND, '#13112E');
        px(0, GROUND, W, 2, '#5B4BB8');
        const goff = worldX % 8;
        for (let x = -goff; x < W; x += 8)
            px(x, GROUND + 4, 4, 2, '#2A2560');
        // rocket trail
        if (!reduce)
            for (let i = 1; i <= 4; i++)
                px(bird.x - bird.size * 0.35 - i * 3, bird.y + 3 + Math.sin(now / 60 + i) * 1.5, 3, 2, i < 2 ? '#FFD36B' : i < 3 ? '#FF9A4D' : '#A35BD6');
        // Atlas (drawn small so the browser scales it up into chunky pixels)
        if (spriteReady) {
            ctx.save();
            ctx.translate(Math.round(bird.x), Math.round(bird.y));
            ctx.rotate(bird.rot);
            ctx.drawImage(sprite, -bird.size / 2, -bird.size / 2, bird.size, bird.size);
            ctx.restore();
        }
        if (flash > 0) {
            ctx.fillStyle = `rgba(255,255,255,${flash / 20})`;
            ctx.fillRect(0, 0, W, H);
            flash -= dt;
        }
        requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
}
function renderOnboarding() {
    var _a, _b;
    const o = state.onb;
    if (o.step >= QS.length)
        return renderBuilding();
    while (o.step < QS.length && !shown(o, o.step))
        o.step++;
    if (o.step >= QS.length)
        return renderOnboarding();
    const q = QS[o.step];
    const vis = visibleQs(o);
    const pos = vis.indexOf(q);
    const anim = onbAnim;
    onbAnim = '';
    const last = pos === vis.length - 1;
    const newPart = anim && (pos === 0 || ((_a = vis[pos + (anim === 'fwd' ? -1 : 1)]) === null || _a === void 0 ? void 0 : _a.part) !== q.part);
    return `<div class="qz-wrap">
    <aside class="qz-art">${state.look.art ? mountains('mist') : ''}
      <div class="qz-quote${newPart ? ' swap' : ''}"><span>“</span><p>${esc(QQUOTES[q.part])}</p></div>${logo('qz-art-logo')}
    </aside>
    <div class="qz">
    <div class="qz-bg" aria-hidden="true"><span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span></div>
    <header class="qz-top">
      ${wordmark('on-dark')}
      <div class="qz-prog" aria-label="Question ${pos + 1} of ${vis.length}">${QPARTS.map(p => {
        const qs = vis.map((x, i) => ({ x, i })).filter(({ x }) => x.part === p);
        const done = qs.filter(({ i }) => i < pos).length + (qs.some(({ i }) => i === pos) ? 0.5 : 0);
        return `<span class="qz-seg${q.part === p ? ' now' : ''}"><i style="width:${(done / qs.length) * 100}%"></i><em>${p}</em></span>`;
    }).join('')}</div>
      <button class="qz-x" data-action="go" data-to="landing" aria-label="Exit setup">${icon('x')}</button>
    </header>
    <main class="qz-stage${anim ? ` in-${anim}` : ''}">
      <div class="qz-atlas">${atlas('float qz-av')}<p class="qz-say" data-say>${esc(q.react(o))}</p></div>
      <p class="qz-count">Question ${pos + 1} of ${vis.length} · ${q.part}</p>
      <h1 class="qz-ask">${esc(q.ask)}</h1>
      ${q.sub ? `<p class="qz-sub">${esc(q.sub)}</p>` : ''}
      <div class="qz-body">${q.body(o)}</div>
      ${o.error ? `<p class="qz-err">${esc(o.error)}</p>` : ''}
    </main>
    <footer class="qz-foot">
      ${o.step ? `<button class="qz-back" data-action="onb-back">${icon('arrowL')}Back</button>` : '<span></span>'}
      <span class="qz-demo"><b>Demo answer:</b> ${esc((_b = DEMO_ANSWERS[q.key]) !== null && _b !== void 0 ? _b : '')}</span>
      <button class="qz-next${last ? ' final' : ''}" data-action="onb-next">${last ? 'Build my assessment' : 'Next'}${icon('arrowR')}</button>
    </footer>
    </div>
  </div>`;
}
/** Setup answers that match the PDHPE example build the full PDHPE breakdown (parts, decoder, real rubric). */
/** Clear a student's work so an assessment starts from scratch. */
function resetWork(a) {
    a.sections.forEach(x => { x.text = ''; x.notes = ''; x.complete = false; x.ignored = []; x.checklist.forEach(c => { c.done = false; }); });
    return a;
}
function isPdhpeDemo(o) {
    return o.subject === 'PDHPE' && /job|application|next chapter/i.test(o.title);
}
function pdhpeFromSetup(o) {
    const base = seed().find(x => x.id === 'pdhpe');
    if (!o.drafts.length)
        resetWork(base); // started work only comes in when the student added a draft
    const away = [];
    if (o.away && o.awayFrom && o.awayTo)
        for (let d = parseIso(o.awayFrom); d <= parseIso(o.awayTo); d = addDays(d, 1))
            away.push(isoDay(d));
    return {
        ...base,
        id: uid('a'),
        title: o.title.trim(),
        year: parseInt(o.year.replace(/\D/g, ''), 10) || 10,
        due: parseIso(o.due),
        teacher: o.teacher.trim() || base.teacher,
        away, busy: o.busy,
        brief: PDHPE_BRIEF,
        resources: [...(o.files.length ? o.files : base.resources), ...o.drafts],
    };
}
function genAssessment(o) {
    const made = genAssessmentBase(o);
    if (o.drafts.length) {
        made.resources.push(...o.drafts);
        made.sections[0].notes = `Imported from: ${o.drafts.map(f => f.name).join(', ')}`;
    }
    return made;
}
function genAssessmentBase(o) {
    const W = o.words;
    const S = o.subject;
    const plans = {
        essay: [
            ['Introduction', 'Give context, answer the question in one clear sentence and preview your points.', 0.15, ['Give context for the topic', 'State your argument clearly', 'Preview the points you will make', 'Use key subject terminology']],
            ['Body Paragraph 1', 'Make your strongest point and support it with evidence.', 0.25, ['Topic sentence links to the question', 'Include specific evidence', 'Explain how the evidence supports your argument', 'Link back to your argument']],
            ['Body Paragraph 2', 'Develop a second point that builds on the first.', 0.25, ['Topic sentence links to the question', 'Include specific evidence', 'Explain the evidence', 'Connect to Paragraph 1']],
            ['Body Paragraph 3', 'Add depth: a counter-argument, comparison or further point.', 0.2, ['Address a different perspective', 'Support with evidence', 'Explain why your argument still holds']],
            ['Conclusion', 'Bring the argument together and make a final judgement.', 0.15, ['Restate your argument in new words', 'Summarise key points', 'Make a final judgement', 'No new evidence']],
        ],
        report: [
            ['Introduction & aim', 'Explain what you are investigating and why.', 0.15, ['State the aim clearly', 'Give background', 'Include a hypothesis or prediction']],
            ['Method', 'Describe exactly what you did so someone else could repeat it.', 0.2, ['List materials or data sources', 'Write steps in order', 'Identify variables']],
            ['Results', 'Present your data clearly.', 0.25, ['Include a table', 'Include a labelled graph', 'Describe trends without explaining yet']],
            ['Discussion', 'Explain what the results mean.', 0.3, ['Explain trends using subject knowledge', 'Identify limitations', 'Suggest improvements']],
            ['Conclusion', 'Answer the aim directly.', 0.1, ['Answer the aim', 'Refer to the hypothesis']],
        ],
        presentation: [
            ['Opening hook', 'Grab attention and state your position.', 0.15, ['Start with a hook', 'State your main message']],
            ['Key point 1', 'Your strongest point with evidence.', 0.3, ['Clear point', 'Evidence or example', 'Link to your message']],
            ['Key point 2', 'A second point that builds the case.', 0.3, ['Clear point', 'Evidence or example', 'Link to your message']],
            ['Conclusion & questions', 'Wrap up memorably and prepare for questions.', 0.25, ['Summarise', 'End with a strong final line', 'Prepare two likely questions']],
        ],
        exam: [
            [`Core ${S} content`, 'Know the key ideas the exam will test.', 0, ['List every topic on the notification', 'Summarise each topic on one page', 'Practise 10 recall questions']],
            ['Key terminology', 'Learn the words markers expect to see.', 0, ['Make palm cards for key terms', 'Test yourself without notes']],
            ['Practice responses', 'Practise the question types in the exam.', 0, ['Do 5 short-answer questions', 'Write 1 extended response']],
            ['Timed practice', 'Rehearse under real conditions.', 0, ['Complete a timed practice paper', 'Review mistakes']],
        ],
    };
    const sections = plans[o.kind].map(([title, purpose, share, items]) => makeSection(title, purpose, o.kind === 'exam' ? 0 : Math.round((W * share) / 10) * 10, items.map(t => ck(t)), '', o.kind === 'exam' ? 60 : Math.max(25, Math.round((W * share) / 8))));
    const away = [];
    if (o.away && o.awayFrom && o.awayTo) {
        for (let d = parseIso(o.awayFrom); d <= parseIso(o.awayTo); d = addDays(d, 1))
            away.push(isoDay(d));
    }
    const colors = ['#0E9F9A', '#D9467A', '#7C5CFC', '#E08A1E', '#2F7BF5'];
    const verb = { essay: 'Write an essay', report: 'Write a report', presentation: 'Prepare and deliver a presentation', exam: 'Prepare for an exam' };
    return {
        id: uid('a'), title: o.title.trim(), subject: S, year: parseInt(o.year.replace(/\D/g, ''), 10) || 10, kind: o.kind, due: parseIso(o.due),
        wordLimit: o.kind === 'exam' ? 0 : W, color: colors[state.assessments.length % colors.length],
        task: o.files.length ? `Based on: ${o.files.map(f => f.name).join(', ')}` : 'No task documents uploaded yet.',
        plain: `${verb[o.kind]} for ${S}${o.kind !== 'exam' ? ` of about ${num(W)} words` : ''}. Veyra has split it into ${sections.length} parts below. Upload your rubric to sharpen the checklists.`,
        criteria: [
            { rubric: 'Demonstrates knowledge and understanding of the topic.', plain: 'Show you know the content and can explain it in your own words.', sections: [] },
            { rubric: 'Uses evidence to support ideas.', plain: 'Back up each point with a specific example, fact or source.', sections: [] },
            { rubric: 'Communicates clearly using subject terminology.', plain: 'Write clearly and use the right subject words correctly.', sections: [] },
        ],
        resources: o.files, sections, teacher: o.teacher.trim(), away, busy: o.busy,
    };
}
// ---------------------------------------------------------------- dashboard
function greeting() {
    const h = new Date().getHours();
    return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
}
function todayTasks() {
    return upcoming().flatMap(a => { var _a, _b; return (_b = (_a = buildPlan(a)[0]) === null || _a === void 0 ? void 0 : _a.tasks) !== null && _b !== void 0 ? _b : []; });
}
function aRow(a) {
    const p = aProgress(a);
    const meta = metaOf(a);
    return `<button class="arow" data-action="go" data-to="assessment" data-id="${a.id}">
    ${aIcon(a)}<span class="arow-t"><b>${esc(a.title)}</b><small>Year ${a.year} · ${esc(a.subject)} · ${meta}</small></span>
    <span class="due-chip">${dueLabel(a)}</span>${bar(p)}<span class="pct">${pct(p)}%</span>${icon('chevR', 'chev')}</button>`;
}
function renderDashboard() {
    const up = upcoming();
    const overall = up.length ? up.reduce((n, a) => n + aProgress(a), 0) / up.length : 1;
    const secLeft = up.reduce((n, a) => n + sectionsLeft(a), 0);
    const minLeft = up.reduce((n, a) => n + minutesLeft(a), 0);
    const tasks = todayTasks().slice(0, 5);
    const tMin = tasks.reduce((n, t) => n + t.minutes, 0);
    const next = up[0];
    const d = new Date();
    const onTrack = up.every(a => aProgress(a) >= 0.25 || daysUntil(a.due) > 10);
    return `<div class="page dash">
    <header class="dash-head">
      <div><h1>${greeting()}, ${esc(state.user.first)}</h1><p class="muted">Stay consistent. You’ve got this.</p></div>
      <div class="date-pill${state.look.art ? ' art' : ''}">${state.look.art ? mountains('mist') : ''}<span>Today is ${WD[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}</span><small>Small steps make big progress.</small></div>
    </header>

    <section class="stats">
      <button class="stat" data-action="go" data-to="assessments"><b>${up.length}</b><span>Upcoming assessments</span><em>View ${icon('arrowR')}</em></button>
      <button class="stat" data-action="go" data-to="progress"><b>${pct(overall)}%</b><span>Overall progress</span><em>View ${icon('arrowR')}</em></button>
      <button class="stat" ${next ? `data-action="go" data-to="assessment" data-id="${next.id}"` : ''}><b>${next ? daysUntil(next.due) : '–'}</b><span>Days until ${next ? esc(next.title) : 'next due'}</span><em>View ${icon('arrowR')}</em></button>
      <button class="stat streak" data-action="go" data-to="progress"><canvas class="fire" data-fire aria-hidden="true"></canvas><span class="streak-t"><b>${STREAK}</b><span>day streak</span><em>Keep it burning ${icon('arrowR')}</em></span></button>
    </section>

    <div class="dash-grid">
      <section class="card overall">
        <h2>Overall Progress</h2>
        <div class="overall-in">${ring(overall, 128, 12)}<div><p class="ok-t">${onTrack ? 'You’re on track!' : 'Let’s catch up'}</p><p class="muted">${plural(secLeft, 'section')} remaining</p><p class="muted">Est. ${hm(minLeft)} left</p></div></div>
      </section>

      <section class="card today">
        <div class="card-h"><h2>Today’s target</h2><span class="muted">${tasks.length ? `${tMin}–${tMin + 15} min` : 'Free day'}</span></div>
        ${tasks.length ? `<ul class="tasks">${tasks.map(t => { const a = findA(t.aId); return `<li><button data-action="go" data-to="${t.sec ? 'section' : 'assessment'}" data-id="${a.id}" ${t.sec ? `data-sec="${t.sec}"` : ''}><span class="tdot" style="--c:${a.color}"></span><span><b>${esc(t.text)}</b><small>${esc(a.title)} · ${t.minutes} min</small></span>${icon('chevR', 'chev')}</button></li>`; }).join('')}</ul>` : '<p class="muted">Nothing planned for today. Enjoy the break.</p>'}
      </section>

      <section class="card quick">
        <h2>Quick Actions</h2>
        <button class="qa" data-action="new-assessment">${icon('plus')}<span>Start a new assessment</span></button>
        <button class="qa" data-action="new-assessment" data-step="1">${icon('upload')}<span>Upload resources</span></button>
        <button class="qa" data-action="go" data-to="assessment" data-id="science" data-tab="study">${icon('book')}<span>Open study tools</span></button>
        <button class="qa atlas-qa" data-action="go" data-to="chat">${atlas('qa-av')}<span>Ask Atlas</span></button>
      </section>

      <section class="current">
        <div class="card-h"><h2>Current Assessments</h2><button class="link" data-action="go" data-to="assessments">View all ${icon('arrowR')}</button></div>
        <div class="arows">${up.map(aRow).join('') || '<p class="muted">No upcoming assessments.</p>'}</div>
      </section>

      <section class="promo">${state.look.art ? mountains('night') : ''}${atlas('float promo-av')}<div class="promo-t"><h3>Not just another AI chatbot.</h3><p>Veyra turns your assessment into a personalised roadmap, so you can understand, plan, research and complete it your way.</p><button class="btn ghost-dark sm" data-action="go" data-to="landing">Learn more ${icon('arrowR')}</button></div></section>
    </div>
  </div>`;
}
// ---------------------------------------------------------------- assessments / exams lists
function aCard(a) {
    const p = aProgress(a);
    const done = isDone(a) || daysUntil(a.due) < 0;
    return `<button class="acard" data-action="go" data-to="assessment" data-id="${a.id}">
    <div class="acard-top">${aIcon(a, 'lg')}<span class="due-chip${done ? ' done' : daysUntil(a.due) <= 3 ? ' soon' : ''}">${done ? 'Finished' : dueLabel(a)}</span></div>
    <b>${esc(a.title)}</b><small>${esc(a.subject)} · ${typeOf(a)} · ${metaOf(a)}</small>
    <div class="acard-p">${bar(p)}<span>${pct(p)}%</span></div>
    <small class="muted">${done ? 'All sections complete' : `${plural(sectionsLeft(a), 'section')} left · ${hm(minutesLeft(a))}`}</small>
  </button>`;
}
function renderList(exams) {
    const f = state.filter;
    let list = state.assessments.filter(a => (exams ? a.kind === 'exam' : a.kind !== 'exam'));
    if (f === 'active')
        list = list.filter(a => !isDone(a) && daysUntil(a.due) >= 0);
    if (f === 'done')
        list = list.filter(a => isDone(a) || daysUntil(a.due) < 0);
    list.sort((x, y) => x.due.getTime() - y.due.getTime());
    return `<div class="page">
    <header class="page-h"><div><h1>${exams ? 'Exams' : 'Assessments'}</h1><p class="muted">${exams ? 'Turn an exam notification into what to know, practise and revise.' : 'Everything you’re working on, in one place.'}</p></div>
      <button class="btn primary" data-action="new-assessment" ${exams ? 'data-kind="exam"' : ''}>${icon('plus')}${exams ? 'Add an exam' : 'New assessment'}</button></header>
    <div class="seg">${[['all', 'All'], ['active', 'In progress'], ['done', 'Finished']].map(([k, l]) => `<button class="${f === k ? 'on' : ''}" data-action="filter" data-value="${k}">${l}</button>`).join('')}</div>
    <div class="agrid">${list.map(aCard).join('')}
      <button class="acard add" data-action="new-assessment" ${exams ? 'data-kind="exam"' : ''}>${icon('plus')}<b>${exams ? 'Add an exam' : 'Start a new assessment'}</b><small>Upload what you have and answer a few questions.</small></button>
    </div>
  </div>`;
}
// ---------------------------------------------------------------- assessment overview
function aHeader(a, crumb) {
    const p = aProgress(a);
    return `<header class="a-head">
    <button class="back" data-action="go" data-to="${a.kind === 'exam' ? 'exams' : 'assessments'}">${icon('arrowL')}${crumb}</button>
    <div class="a-head-row">
      <div class="a-title">${aIcon(a, 'lg')}<div><h1>${esc(a.title)}</h1><p class="muted">${esc(a.subject)} · Year ${a.year} · ${dueLabel(a)} (${dueIn(a)})</p></div></div>
      <div class="a-head-r"><div class="a-prog">${bar(p)}<b>${pct(p)}%</b></div>
      ${a.kind !== 'exam' ? `<button class="btn outline" data-action="go" data-to="full" data-id="${a.id}">View full assessment</button>` : ''}</div>
    </div>
  </header>`;
}
function rubricHtml(a) {
    return `<section class="rubric">
      <p class="muted plan-intro">Rubric language, translated. Each requirement is turned into checklist items inside the sections it applies to.</p>
      <div class="rub-table"><div class="rub-h"><span>Rubric says</span><span>What it means for you</span><span>Applies to</span></div>
      ${a.criteria.map(c => `<div class="rub-r"><span class="rub-q">${c.part ? `<span class="rub-part"><b>${esc(c.part)}</b><em class="rub-marks">${c.marks} marks</em></span>${c.band ? `<small class="rub-band">Top band (${esc(c.band)}):</small>` : ''}` : ''}<i>${esc(c.rubric)}</i></span><span>${esc(c.plain)}</span><span class="rub-s">${c.sections.length ? c.sections.map(id => { const s = findS(a, id); return s ? `<button class="tag" data-action="go" data-to="section" data-id="${a.id}" data-sec="${s.id}">${esc(s.title)}</button>` : ''; }).join('') : '<span class="tag">Whole assessment</span>'}</span></div>`).join('')}${a.criteria.some(c => c.marks) ? `<div class="rub-total"><span>Total</span><b>${a.criteria.reduce((n, c) => { var _a; return n + ((_a = c.marks) !== null && _a !== void 0 ? _a : 0); }, 0)} marks</b></div>` : ''}</div>
    </section>`;
}
/** Side card: a few lines of the teacher's wording with the tricky phrases marked; opens the full decoder. */
let decodeOpen = false;
function decodeCard(a) {
    const b = briefFor(a);
    if (!b.decode.length)
        return '';
    const term = Math.min(state.term, b.decode.length - 1);
    return `<section class="card dc-card"><h3>${icon('book')}Your teacher’s wording, decoded</h3>
    <div class="dc-snip"><p>${decodeHtml(a.task, b.decode, term, 'aterm')}</p></div>
    <div class="ub-mean sm" data-ameaning><small>“${esc(b.decode[term][0])}” means</small><b>${esc(b.decode[term][1])}</b></div>
    <button class="btn outline sm full" data-action="decode-open">See the full wording ${icon('arrowR')}</button></section>`;
}
function decodeModal(a) {
    const b = briefFor(a);
    if (!decodeOpen || !b.decode.length)
        return '';
    const term = Math.min(state.term, b.decode.length - 1);
    return `<div class="dc-modal" role="dialog" aria-modal="true" aria-label="Your teacher’s wording, decoded">
    <div class="dc-back" data-action="decode-close"></div>
    <div class="dc-box card">
      <div class="dc-box-h"><div><h2>Your teacher’s wording, decoded</h2><p class="muted sm">Hover or tap a highlighted phrase to see what it means.</p></div><button class="icon-btn" data-action="decode-close" aria-label="Close">${icon('x')}</button></div>
      <div class="ab-decode"><p class="ub-orig">${decodeHtml(a.task, b.decode, term, 'aterm')}</p>
      <div class="ub-mean" data-ameaning><small>“${esc(b.decode[term][0])}” means</small><b>${esc(b.decode[term][1])}</b></div></div>
    </div>
  </div>`;
}
function askBrief(a) {
    const b = briefFor(a);
    const term = Math.min(state.term, Math.max(0, b.decode.length - 1));
    return `<div class="ab">
    <div class="ab-q"><small>The question</small><b>${esc(b.question)}</b></div>
    <div class="ab-facts">${b.facts.map(([k, v]) => `<span><em>${k}</em>${esc(v)}</span>`).join('')}<span><em>Due</em>${fmtLong(a.due)}</span></div>
    <h3 class="ab-h">${a.kind === 'exam' ? 'What you need to do to prepare' : 'What you need to do, step by step'}</h3>
    <ol class="ab-steps">${b.steps.map(([t, d], n) => `<li><span>${n + 1}</span><div><b>${esc(t)}</b><p>${esc(d)}</p></div></li>`).join('')}</ol>
    ${b.decode.length ? ''
        : `<button class="link" data-action="toggle-original">${state.showOriginal ? 'Hide' : 'Show'} the original wording ${icon('chevD')}</button>${state.showOriginal ? `<blockquote>${esc(a.task)}</blockquote>` : ''}`}
  </div>`;
}
// ---- Plan tab: a month-style calendar from this week to the due date
let planSel = '';
function planCalendar(a, plan) {
    const byKey = new Map(plan.map(d => [d.key, d]));
    const t0 = today();
    const start = addDays(t0, -((t0.getDay() + 6) % 7)); // Monday of this week
    const dueDay = sod(a.due);
    const end = addDays(dueDay, (7 - ((dueDay.getDay() + 6) % 7) - 1)); // Sunday of the due week
    const sel = planSel && (byKey.has(planSel) || planSel === isoDay(dueDay)) ? planSel : isoDay(t0);
    const totalMin = plan.reduce((n, d) => n + d.tasks.reduce((m, t) => m + t.minutes, 0), 0);
    const cells = [];
    for (let d = start; d <= end; d = addDays(d, 1)) {
        const key = isoDay(d);
        const pd = byKey.get(key);
        const isDue = key === isoDay(dueDay);
        const past = d < t0;
        const outside = !pd && !isDue;
        const cls = ['cal-d', key === isoDay(t0) ? 'today' : '', isDue ? 'due' : '', (pd === null || pd === void 0 ? void 0 : pd.away) ? 'away' : '', (pd === null || pd === void 0 ? void 0 : pd.busy) && !pd.away ? 'busy' : '', past ? 'past' : '', outside ? 'off' : '', key === sel ? 'sel' : ''].filter(Boolean).join(' ');
        const chips = pd && !pd.away ? pd.tasks.slice(0, 2).map(t => `<span class="cal-chip" title="${esc(t.text)} · ${t.minutes} min">${esc(t.text)}</span>`).join('') + (pd.tasks.length > 2 ? `<span class="cal-more">+${pd.tasks.length - 2} more</span>` : '') : '';
        const mins = pd && !pd.away ? pd.tasks.reduce((n, t) => n + t.minutes, 0) : 0;
        cells.push(`<button class="${cls}" ${outside ? 'disabled' : `data-action="plan-day" data-day="${key}"`} aria-label="${fmtLong(d)}">
      <span class="cal-top"><b>${d.getDate()}</b>${d.getDate() === 1 || cells.length === 0 ? `<em>${MONTHS[d.getMonth()]}</em>` : ''}${mins ? `<small>${mins}m</small>` : ''}</span>
      ${isDue ? `<span class="cal-flag">${icon('flame')}${a.kind === 'exam' ? 'Exam' : 'Due'}</span>` : (pd === null || pd === void 0 ? void 0 : pd.away) ? `<span class="cal-away">${icon('sun')}Away</span>` : chips}
    </button>`);
    }
    const sd = byKey.get(sel);
    const selDate = parseIso(sel);
    const isSelDue = sel === isoDay(dueDay);
    const panel = `<aside class="cal-panel card">
    <p class="cal-p-day">${sel === isoDay(t0) ? 'Today' : WD_LONG[selDate.getDay()]}<small>${fmt(selDate)}</small></p>
    ${isSelDue ? `<p class="cal-p-due">${icon('flame')}${a.kind === 'exam' ? 'Exam day. Good luck!' : 'Submit day. You’ve got this.'}</p>`
        : (sd === null || sd === void 0 ? void 0 : sd.away) ? `<p class="muted">You’re away. Veyra has moved this day’s work to other days.</p>`
            : sd && sd.tasks.length ? `<ul class="cal-tasks">${sd.tasks.map(t => `<li><button ${t.sec ? `data-action="go" data-to="section" data-id="${a.id}" data-sec="${t.sec}"` : `data-action="go" data-to="full" data-id="${a.id}"`}><span>${esc(t.text)}</span><small>${t.minutes} min</small>${icon('chevR', 'chev')}</button></li>`).join('')}</ul>`
                : `<p class="muted">${(sd === null || sd === void 0 ? void 0 : sd.busy) ? 'Busy day, so nothing is planned.' : 'Nothing planned. A buffer day in case anything runs over.'}</p>`}
    ${sd ? `<button class="btn outline full" data-action="away" data-id="${a.id}" data-day="${sel}">${icon(sd.away ? 'undo' : 'sun')}${sd.away ? 'I’m free this day' : 'I’m away this day'}</button>` : ''}
  </aside>`;
    return `<section class="cal-wrap">
    <div class="cal-main">
      <div class="cal-head"><p class="muted">About <b>${hm(totalMin)}</b> of work spread across your days. Click a day to see it.</p>
        <div class="cal-legend"><span><i class="lg-today"></i>Today</span><span><i class="lg-away"></i>Away</span><span><i class="lg-busy"></i>Busy</span><span><i class="lg-due"></i>${a.kind === 'exam' ? 'Exam' : 'Due'}</span></div></div>
      <div class="cal">${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(w => `<span class="cal-wd">${w}</span>`).join('')}${cells.join('')}</div>
    </div>
    ${panel}
  </section>`;
}
function renderAssessment(a, tab) {
    const tabs = a.kind === 'exam' ? [['overview', 'Overview'], ['sections', `Topics <em class="tab-n">${a.sections.length}</em>`], ['plan', 'Plan'], ['study', 'Study tools'], ['resources', 'Resources']] : [['overview', 'Overview'], ['sections', `Sections <em class="tab-n">${a.sections.length}</em>`], ['plan', 'Plan'], ['rubric', 'Rubric'], ['resources', 'Resources']];
    let content = '';
    const plan = buildPlan(a);
    if (tab === 'overview') {
        const pipeline = a.kind === 'exam' ? `<div class="pipe">${['What you need to know', 'What to practise', 'How to prepare', 'What to revise'].map((x, i) => `<span><b>${i + 1}</b>${x}</span>`).join(icon('chevR'))}</div>` : '';
        content = `<div class="ov-grid">
      <div class="ov-main">
        <section class="card ask">
          <p class="eyebrow">What am I actually being asked to do?</p>
          ${askBrief(a)}
          <button class="btn primary ask-go" data-action="tab" data-tab="sections">${a.kind === 'exam' ? 'Go to your topics' : 'Start on the sections'} ${icon('arrowR')}</button>
          ${pipeline}
        </section>
      </div>
      <aside class="ov-side">
        <section class="card due-card"><span class="muted">${a.kind === 'exam' ? 'Exam' : 'Due'}</span><b>${fmtLong(a.due)}</b><div class="due-big"><span>${Math.max(0, daysUntil(a.due))}</span><small>days to go</small></div><p class="muted">${icon('clock')} About ${hm(minutesLeft(a))} of work left</p></section>
        <section class="card"><div class="card-h"><h3>Today’s target</h3><button class="link sm" data-action="tab" data-tab="plan">Full plan</button></div>
          ${plan[0].tasks.length ? `<ul class="mini-tasks">${plan[0].tasks.map(t => `<li><span>${esc(t.text)}</span><small>${t.minutes}m</small></li>`).join('')}</ul>` : `<p class="muted">${plan[0].away ? 'You’re away today.' : 'Nothing today. Next task is coming up in your plan.'}</p>`}</section>
        ${a.teacher ? `<section class="card note"><h3>${icon('pen')}Your teacher said</h3><p>${esc(a.teacher)}</p></section>` : ''}
        ${decodeCard(a)}
      </aside>
    </div>`;
    }
    if (tab === 'sections') {
        content = `<div class="sec-tab">
        <section>
          <div class="card-h"><h2>${a.kind === 'exam' ? 'Topics' : 'Sections'}</h2><span class="muted">${a.sections.filter(s => s.complete).length} of ${a.sections.length} complete</span></div>
          <ol class="secs">${a.sections.map((s, i) => {
            const done = s.checklist.filter(c => c.done).length;
            return `<li><button class="sec-row" data-action="go" data-to="section" data-id="${a.id}" data-sec="${s.id}">
              <span class="sec-n${s.complete ? ' done' : ''}">${s.complete ? icon('check') : i + 1}</span>
              <span class="sec-t"><b>${esc(s.title)}</b><small>${esc(s.purpose)}</small></span>
              <span class="sec-m"><span>${done}/${s.checklist.length} requirements</span>${s.limit ? `<span>${num(words(s.text))} / ${num(s.limit)} words</span>` : ''}</span>
              ${statusPill(s)}${icon('chevR', 'chev')}</button></li>`;
        }).join('')}</ol>
        </section>
    </div>`;
    }
    if (tab === 'plan')
        content = planCalendar(a, plan);
    if (tab === 'rubric')
        content = rubricHtml(a);
    if (tab === 'study' && a.kind === 'exam')
        content = studyTab(a);
    if (tab === 'resources') {
        content = `<section class="res">
      <ul class="files big">${a.resources.map(f => `<li>${icon('file')}<span><b>${esc(f.name)}</b><small>${esc(f.kind)}</small></span></li>`).join('') || '<li class="muted">No resources yet.</li>'}</ul>
      <label class="drop sm"><input type="file" id="res-files" data-res="${a.id}" multiple hidden>${icon('upload')}<b>Add more resources</b><small>More context means sharper checklists</small></label>
    </section>`;
    }
    return `<div class="page">${tab === 'overview' ? decodeModal(a) : ''}${aHeader(a, a.kind === 'exam' ? 'All exams' : 'All assessments')}
    <nav class="tabs" role="tablist">${tabs.map(([k, l]) => `<button role="tab" aria-selected="${tab === k}" class="${tab === k ? 'on' : ''}" data-action="tab" data-tab="${k}">${l}</button>`).join('')}</nav>
    ${content}</div>`;
}
// ---------------------------------------------------------------- chat panel
function chatKey(a, s) { return a ? `${a.id}:${s ? s.id : 'all'}` : 'global'; }
function ctxFromKey(key) {
    if (key === 'global')
        return {};
    const [aid, sid] = key.split(':');
    const a = findA(aid);
    return { a, s: sid === 'all' ? undefined : findS(a, sid) };
}
function msgsHtml(key) {
    var _a;
    const msgs = (_a = state.chats[key]) !== null && _a !== void 0 ? _a : [];
    const { a, s } = ctxFromKey(key);
    if (!msgs.length)
        return `<div class="chat-empty">${atlas('float big')}<b>Hi, I’m Atlas.</b><p>I’m here to help you understand ${a ? `your <b>${esc(s ? s.title : a.title)}</b>` : 'your assessments'}. I’ll explain, research and plan with you. I won’t write it for you.</p></div>`;
    return msgs.map(m => m.from === 'typing'
        ? `<div class="msg-row ai">${atlas('av')}<div class="msg ai typing"><i></i><i></i><i></i></div></div>`
        : m.from === 'ai' ? `<div class="msg-row ai">${atlas('av')}<div class="msg ai">${m.html}</div></div>` : `<div class="msg ${m.from}">${m.html}</div>`).join('');
}
function chatPanel(key, big = false) {
    const { a, s } = ctxFromKey(key);
    return `<section class="chat${big ? ' big' : ''}" aria-label="AI assistant">
    <header class="chat-h">${atlas('head')}<span class="chat-who"><b>${ATLAS}</b><em>Study assistant</em></span><small>${a ? esc(s ? s.title : a.title) : 'General'}</small></header>
    <div class="chat-log" data-log="${key}">${msgsHtml(key)}</div>
    <div class="chat-sug">${suggestions(a, s).map(q => `<button class="chip" data-action="ask" data-key="${key}" data-q="${esc(q)}">${esc(q)}</button>`).join('')}</div>
    <form class="chat-f" data-chat="${key}"><input id="chat-in-${key.replace(':', '-')}" name="q" placeholder="Ask Atlas a question…" autocomplete="off" aria-label="Ask Atlas"><button class="send" aria-label="Send">${icon('send')}</button></form>
  </section>`;
}
// ---------------------------------------------------------------- editor
function editor(a, s, mode) {
    const key = `${a.id}:${s.id}`;
    const ph = a.kind === 'exam' ? 'Your revision notes for this topic…' : `Start writing your ${s.title.toLowerCase()} here. This is your work. Veyra only checks spelling and grammar.`;
    return `<div class="ed ${mode}"><div class="ed-back" data-back="${key}" aria-hidden="true">${highlight(s.text, s.ignored)}</div><textarea class="ed-area" id="ed-${a.id}-${s.id}" data-editor="${key}" spellcheck="false" placeholder="${esc(ph)}" aria-label="${esc(s.title)} text">${esc(s.text)}</textarea></div>`;
}
function wcHtml(s) {
    if (!s.limit)
        return '';
    const n = words(s.text);
    const over = n > s.limit;
    return `<span class="wc${over ? ' over' : ''}">${num(n)} / ${num(s.limit)} words${over ? '<i class="red-dot" aria-label="over limit"></i>' : ''}</span>`;
}
function issuesHtml(a, s) {
    const issues = findIssues(s.text, s.ignored);
    if (!issues.length)
        return s.text.trim() ? `<p class="issues-ok">${icon('check')}No spelling or grammar suggestions.</p>` : '';
    return issues.slice(0, 6).map((i, n) => `<div class="issue ${i.type}">
    <span class="issue-k">${i.type === 'spelling' ? 'Spelling' : 'Grammar'}</span>
    <p>${i.fix && i.type === 'spelling' ? `“${esc(i.word)}” → “${esc(i.fix)}”` : esc(i.msg)}</p>
    <div class="issue-a">${i.fix ? `<button class="link sm" data-action="apply" data-id="${a.id}" data-sec="${s.id}" data-n="${n}">Change</button>` : ''}<button class="link sm muted" data-action="ignore" data-id="${a.id}" data-sec="${s.id}" data-n="${n}">Ignore</button></div>
  </div>`).join('') + (issues.length > 6 ? `<p class="muted sm">+${issues.length - 6} more</p>` : '');
}
function totalHtml(a) {
    const n = totalWords(a);
    if (!a.wordLimit)
        return `<b>${num(n)} words written</b><span class="wstat">${metaOf(a)}</span>`;
    const diff = (n - a.wordLimit) / a.wordLimit;
    const cls = diff > 0.1 ? 'over' : diff >= -0.1 ? 'ok' : '';
    return `<b>${num(n)} / ${num(a.wordLimit)} words</b><span class="wstat ${cls}">${Math.abs(Math.round(diff * 100))}% ${diff > 0 ? 'over' : 'under'}</span>`;
}
// ---------------------------------------------------------------- section view
function renderSection(a, s) {
    const idx = a.sections.indexOf(s);
    const prev = a.sections[idx - 1];
    const next = a.sections[idx + 1];
    const done = s.checklist.filter(c => c.done).length;
    const key = chatKey(a, s);
    return `<div class="page sec-page${state.focus ? ' focus' : ''}">
    <header class="sec-head">
      <button class="back" data-action="go" data-to="assessment" data-id="${a.id}">${icon('arrowL')}${esc(a.title)}</button>
      <div class="sec-head-r"><div class="a-prog">${bar(aProgress(a))}<b>${pct(aProgress(a))}%</b></div>
      <button class="icon-btn" data-action="focus" aria-label="${state.focus ? 'Exit focus mode' : 'Focus mode'}" title="Focus mode">${icon(state.focus ? 'x' : 'target')}</button>
      ${a.kind !== 'exam' ? `<button class="btn outline sm" data-action="go" data-to="full" data-id="${a.id}">View full assessment</button>` : ''}</div>
    </header>
    <div class="sec-grid">
      <aside class="sec-info card">
        <div class="si-h"><h1>${esc(s.title)}</h1>${statusPill(s)}</div>
        <p class="muted sm">${done}/${s.checklist.length} requirements completed</p>
        <div class="si-p"><small>Section progress</small>${bar(secProgress(s))}</div>
        <p class="purpose">${esc(s.purpose)}</p>
        <h3>Checklist</h3>
        <ul class="checklist">${s.checklist.map(c => `<li><button class="chk${c.done ? ' on' : ''}" role="checkbox" aria-checked="${c.done}" data-action="check" data-id="${a.id}" data-sec="${s.id}" data-item="${c.id}"><span class="box">${icon('check')}</span><span>${esc(c.text)}</span></button>${!c.done && c.from !== undefined && a.criteria[c.from] ? `<span class="from" title="${esc(a.criteria[c.from].rubric)}">From rubric: ${esc(a.criteria[c.from].plain.split(/[.,]/)[0])}</span>` : ''}</li>`).join('')}</ul>
        ${s.limit ? `<h3>Word count</h3><div class="wc-row" data-wc="${a.id}:${s.id}">${wcHtml(s)}</div><div data-wcbar="${a.id}:${s.id}">${bar(Math.min(1, words(s.text) / s.limit), words(s.text) > s.limit ? 'over' : '')}</div>` : ''}
        ${s.complete
        ? `<button class="btn outline full" data-action="reopen" data-id="${a.id}" data-sec="${s.id}">${icon('undo')}Reopen section</button>`
        : `<button class="btn dark full" data-action="complete" data-id="${a.id}" data-sec="${s.id}">${icon('check')}Mark section complete</button>`}
        <label class="notes"><span>Notes</span><textarea id="notes-${a.id}-${s.id}" data-notes="${a.id}:${s.id}" rows="3" placeholder="Add your own notes…">${esc(s.notes)}</textarea></label>
      </aside>
      <section class="sec-write">
        <div class="write-h"><span>${a.kind === 'exam' ? 'Revision notes' : 'Your writing'}</span><span class="legend"><i class="sp"></i>Spelling<i class="gr"></i>Grammar</span></div>
        ${editor(a, s, 'sec')}
        <div class="write-foot"><div class="issues" data-issues="${a.id}:${s.id}">${issuesHtml(a, s)}</div><span data-wc2="${a.id}:${s.id}">${wcHtml(s)}</span></div>
        <div class="sec-nav">${prev ? `<button class="btn ghost" data-action="go" data-to="section" data-id="${a.id}" data-sec="${prev.id}">${icon('arrowL')}${esc(prev.title)}</button>` : '<span></span>'}${next ? `<button class="btn ghost" data-action="go" data-to="section" data-id="${a.id}" data-sec="${next.id}">${esc(next.title)}${icon('arrowR')}</button>` : a.kind !== 'exam' ? `<button class="btn ghost" data-action="go" data-to="full" data-id="${a.id}">Full assessment${icon('arrowR')}</button>` : ''}</div>
      </section>
      ${chatPanel(key)}
    </div>
  </div>`;
}
// ---------------------------------------------------------------- full view
function renderFull(a, tab) {
    var _a;
    const all = a.sections.flatMap(s => findIssues(s.text, s.ignored));
    const sp = all.filter(i => i.type === 'spelling').length;
    const gr = all.length - sp;
    const t = tab || 'doc';
    let main = '';
    if (t === 'doc') {
        main = `<article class="doc"><h1 class="doc-title">${esc(a.title)}</h1>
      ${a.sections.map(s => `<section class="doc-sec"><div class="doc-sh"><button class="doc-link" data-action="go" data-to="section" data-id="${a.id}" data-sec="${s.id}">${esc(s.title)}</button><span data-wc="${a.id}:${s.id}">${wcHtml(s)}</span>${s.complete ? `<span class="pill ok sm">${icon('check')}Complete</span>` : ''}</div>${editor(a, s, 'full')}</section>`).join('')}
    </article>`;
    }
    else if (t === 'rubric') {
        main = rubricHtml(a);
    }
    else {
        main = `<ul class="files big">${a.resources.map(f => `<li>${icon('file')}<span><b>${esc(f.name)}</b><small>${esc(f.kind)}</small></span></li>`).join('')}</ul>`;
    }
    return `<div class="page">
    <header class="sec-head"><button class="back" data-action="go" data-to="assessment" data-id="${a.id}">${icon('arrowL')}${esc(a.title)}</button>
      <div class="sec-head-r"><div class="total" data-total="${a.id}">${totalHtml(a)}</div><button class="btn outline sm" data-action="go" data-to="section" data-id="${a.id}" data-sec="${((_a = a.sections.find(s => !s.complete)) !== null && _a !== void 0 ? _a : a.sections[0]).id}">Section view</button></div></header>
    <nav class="tabs">${[['doc', 'Full Assessment'], ['rubric', 'Rubric'], ['res', 'Resources']].map(([k, l]) => `<button class="${t === k ? 'on' : ''}" data-action="tab" data-tab="${k}">${l}</button>`).join('')}</nav>
    <div class="full-grid">
      <div class="full-main">${main}</div>
      <aside class="full-side">
        <section class="card"><h3>Overall Progress</h3><div class="overall-in sm">${ring(aProgress(a), 92, 9)}<div><p class="muted">${plural(sectionsLeft(a), 'section')} remaining</p><p class="muted">Est. ${hm(minutesLeft(a))} left</p></div></div></section>
        <section class="card"><h3>Spelling &amp; Grammar</h3><p class="sg"><i class="sp"></i>${plural(sp, 'spelling issue')}</p><p class="sg"><i class="gr"></i>${plural(gr, 'grammar suggestion')}</p><p class="muted sm">Fix them in each section, or right here in the text.</p></section>
        <section class="card info"><h3>Assessment Info</h3><dl><dt>Subject</dt><dd>${esc(a.subject)}</dd><dt>Type</dt><dd>${typeOf(a)}</dd><dt>${a.wordLimit ? 'Word limit' : 'Length'}</dt><dd>${a.wordLimit ? num(a.wordLimit) : metaOf(a)}</dd><dt>Due date</dt><dd>${fmt(a.due)}, ${a.due.getFullYear()}</dd></dl></section>
        ${chatPanel(chatKey(a), false)}
      </aside>
    </div>
  </div>`;
}
// ---------------------------------------------------------------- study tools
const CARDS = {
    science: [['Exothermic reaction', 'A reaction that releases energy, usually as heat.'], ['Catalyst', 'A substance that speeds up a reaction without being used up.'], ['Allele', 'A different version of the same gene.'], ['Homozygous', 'Having two identical alleles for a trait.'], ['Punnett square', 'A grid used to predict the possible genotypes of offspring.']],
};
const QUIZ = {
    science: [
        { q: 'A reaction that releases heat is…', opts: ['Endothermic', 'Exothermic', 'Neutral', 'Reversible'], a: 1, why: 'Exo = out. Energy leaves the system as heat.' },
        { q: 'An organism with alleles Bb is…', opts: ['Homozygous dominant', 'Homozygous recessive', 'Heterozygous', 'Mutated'], a: 2, why: 'Two different alleles means heterozygous.' },
        { q: 'What does a catalyst do?', opts: ['Gets used up', 'Slows a reaction', 'Speeds up a reaction without being consumed', 'Changes the products'], a: 2, why: 'Catalysts lower the activation energy and are not consumed.' },
    ],
};
/** Study tools tab inside an exam: palm cards and a practice quiz. */
function studyTab(a) {
    var _a;
    const st = state.study;
    if (st.aId !== a.id)
        Object.assign(st, { aId: a.id, card: 0, flipped: false, q: 0, picked: null, score: 0 });
    if (!CARDS[a.id]) {
        return `<div class="card study-empty">${atlas('float big')}<h2>Study tools are on their way</h2><p class="muted">Once your exam notes and topics are added, Veyra builds palm cards and a practice quiz for ${esc(a.title)} here.</p></div>`;
    }
    const set = CARDS[a.id];
    const quiz = (_a = QUIZ[a.id]) !== null && _a !== void 0 ? _a : [];
    let body = '';
    if (st.mode === 'cards' || !quiz.length) {
        const c = set[st.card % set.length];
        body = `<div class="flash-wrap">
      <button class="flash${st.flipped ? ' flipped' : ''}" data-action="flip" aria-label="Flip card"><span class="flash-in"><span class="face front"><small>Term</small><b>${esc(c[0])}</b><em>Tap to flip</em></span><span class="face back"><small>Meaning</small><p>${esc(c[1])}</p></span></span></button>
      <div class="flash-ctl"><button class="icon-btn" data-action="card" data-d="-1" aria-label="Previous card">${icon('arrowL')}</button><span>${(st.card % set.length) + 1} / ${set.length}</span><button class="icon-btn" data-action="card" data-d="1" aria-label="Next card">${icon('arrowR')}</button></div>
    </div>`;
    }
    else if (st.q >= quiz.length) {
        body = `<div class="quiz-done card">${ring(st.score / quiz.length, 120, 11)}<h2>${st.score} of ${quiz.length} correct</h2><p class="muted">${st.score === quiz.length ? 'Perfect. You know this.' : 'Review the cards for the ones you missed, then try again.'}</p><button class="btn primary" data-action="quiz-reset">Try again</button></div>`;
    }
    else {
        const q = quiz[st.q];
        body = `<div class="quiz card"><div class="quiz-h"><small>Question ${st.q + 1} of ${quiz.length}</small>${bar(st.q / quiz.length)}</div><h2>${esc(q.q)}</h2>
      <div class="opts">${q.opts.map((o, i) => {
            const cls = st.picked === null ? '' : i === q.a ? ' right' : i === st.picked ? ' wrong' : ' dim';
            return `<button class="opt${cls}" data-action="pick" data-i="${i}" ${st.picked !== null ? 'disabled' : ''}><span>${'ABCD'[i]}</span>${esc(o)}</button>`;
        }).join('')}</div>
      ${st.picked !== null ? `<div class="why ${st.picked === q.a ? 'ok' : 'bad'}"><b>${st.picked === q.a ? 'Correct.' : 'Not quite.'}</b> ${esc(q.why)}</div><button class="btn primary" data-action="quiz-next">${st.q + 1 === quiz.length ? 'See results' : 'Next question'} ${icon('arrowR')}</button>` : ''}
    </div>`;
    }
    return `<section class="study-tab">
    <div class="study-bar"><p class="muted">Palm cards for key terms and a practice quiz on this exam’s topics.</p>
    <div class="seg">${[['cards', 'Palm cards'], ['quiz', 'Practice quiz']].map(([k, l]) => `<button class="${st.mode === k ? 'on' : ''}" data-action="study-mode" data-mode="${k}">${l}</button>`).join('')}</div></div>
    ${body}
  </section>`;
}
// ---------------------------------------------------------------- chat page
function renderChat() {
    const ctx = state.chatCtx;
    const opts = [['global', 'General', 'chat'], ...upcoming().map(a => [a.id, a.title, KIND_ICON[a.kind]])];
    const key = ctx === 'global' ? 'global' : `${ctx}:all`;
    return `<div class="page chat-page">
    <header class="page-h atlas-h">${atlas('float hero-av')}<div><h1>Chat with Atlas</h1><p class="muted">Your study assistant. Atlas knows your assessment, rubric and progress, and helps you understand, research and plan.</p></div></header>
    <div class="chat-layout">
      <nav class="ctx-list" aria-label="Chat context">${opts.map(([id, l, ic]) => `<button class="${ctx === id ? 'on' : ''}" data-action="chat-ctx" data-id="${id}">${icon(ic)}<span>${esc(l)}</span></button>`).join('')}</nav>
      ${chatPanel(key, true)}
    </div>
  </div>`;
}
// ---------------------------------------------------------------- progress
function renderProgress() {
    var _a;
    const all = state.assessments;
    const up = upcoming();
    const overall = up.length ? up.reduce((n, a) => n + aProgress(a), 0) / up.length : 1;
    const secs = all.flatMap(a => a.sections);
    const done = secs.filter(s => s.complete).length;
    const inprog = secs.filter(s => !s.complete && secProgress(s) > 0).length;
    const subjects = new Map();
    for (const a of all) {
        const e = (_a = subjects.get(a.subject)) !== null && _a !== void 0 ? _a : { p: 0, n: 0, c: a.color };
        e.p += aProgress(a);
        e.n++;
        subjects.set(a.subject, e);
    }
    const week = [35, 50, 0, 45, 60, 20, 40];
    const max = Math.max(...week);
    const tab = state.progTab;
    return `<div class="page">
    <header class="page-h"><div><h1>Your Progress</h1><p class="muted">Based on the requirements you’ve ticked and sections you’ve completed, not word count.</p></div></header>
    <div class="seg">${[['overview', 'Overview'], ['subjects', 'By assessment']].map(([k, l]) => `<button class="${tab === k ? 'on' : ''}" data-action="prog-tab" data-tab="${k}">${l}</button>`).join('')}</div>
    ${tab === 'overview' ? `<div class="prog-grid">
      <section class="card pg-ring">${ring(overall, 150, 13, 'Overall progress')}
        <div class="pg-stats"><div><b>${done}</b><span>Sections completed</span></div><div><b>${inprog}</b><span>In progress</span></div><div><b>${up.length}</b><span>Upcoming</span></div></div></section>
      <section class="card"><h2>Subject Breakdown</h2><ul class="subj">${[...subjects].map(([k, v]) => `<li><span>${esc(k)}</span><span class="bar tint" style="--c:${v.c}"><i style="width:${pct(v.p / v.n)}%"></i></span><b>${pct(v.p / v.n)}%</b></li>`).join('')}</ul></section>
      <section class="card"><div class="card-h"><h2>This week</h2><span class="muted sm">Example data</span></div>
        <div class="week">${week.map((m, i) => `<div class="wk"><span class="wk-v">${m ? m + 'm' : ''}</span><span class="wk-b${i === (new Date().getDay() + 6) % 7 ? ' now' : ''}" style="height:${m ? Math.max(6, (m / max) * 100) : 2}%"></span><small>${['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</small></div>`).join('')}</div>
        <p class="muted sm">${icon('flame')} ${STREAK}-day streak</p></section>
      <section class="card"><h2>Recent Activity</h2><ul class="activity">${state.activity.slice(0, 6).map(x => `<li><span class="act-ic ${x.tone}">${icon(x.tone === 'done' ? 'check' : x.tone === 'new' ? 'plus' : 'pen')}</span><span><b>${esc(x.text)}</b><small class="${x.tone}">${esc(x.sub)}</small></span><small class="muted">${ago(x.at)}</small></li>`).join('')}</ul></section>
    </div>` : `<div class="prog-list">${all.map(a => `<section class="card pl">
      <div class="pl-h">${aIcon(a)}<div><b>${esc(a.title)}</b><small class="muted">${dueLabel(a)}</small></div><span class="pl-p">${pct(aProgress(a))}%</span></div>
      <ul class="pl-secs">${a.sections.map(s => `<li><span>${esc(s.title)}</span>${bar(secProgress(s))}<small>${s.complete ? 'Complete' : `${s.checklist.filter(c => c.done).length}/${s.checklist.length}`}</small></li>`).join('')}</ul></section>`).join('')}</div>`}
  </div>`;
}
function ago(t) {
    const m = Math.round((Date.now() - t) / 60000);
    if (m < 1)
        return 'just now';
    if (m < 60)
        return `${m}m ago`;
    if (m < 1440)
        return `${Math.round(m / 60)}h ago`;
    return `${Math.round(m / 1440)} days ago`;
}
// ---------------------------------------------------------------- looks
const ACCENTS = [['#2F7BF5', 'Veyra blue'], ['#5865F2', 'Indigo'], ['#0E9F9A', 'Teal'], ['#8B5CF6', 'Violet'], ['#E5487A', 'Rose'], ['#E08A1E', 'Amber']];
const FONTS = ['Inter', 'Manrope', 'DM Sans', 'Plus Jakarta Sans'];
function lookControls() {
    const L = state.look;
    const seg = (key, opts) => `<div class="seg sm">${opts.map(([v, l]) => `<button class="${String(L[key]) === v ? 'on' : ''}" data-action="look" data-key="${key}" data-value="${v}">${l}</button>`).join('')}</div>`;
    return `<div class="look-g"><span>Mode</span>${seg('mode', [['system', 'Auto'], ['light', 'Light'], ['dark', 'Dark']])}</div>
    <div class="look-g"><span>Sidebar</span>${seg('style', [['midnight', 'Midnight'], ['light', 'Light'], ['accent', 'Accent']])}</div>
    <div class="look-g"><span>Accent</span><div class="swatches">${ACCENTS.map(([c, n]) => `<button class="sw${L.accent === c ? ' on' : ''}" style="--sw:${c}" data-action="look" data-key="accent" data-value="${c}" aria-label="${n}" title="${n}"></button>`).join('')}</div></div>
    <div class="look-g"><span>Progress colour</span>${seg('prog', [['green', 'Green'], ['accent', 'Accent']])}</div>
    <div class="look-g"><span>Corners</span>${seg('radius', [['6', 'Sharp'], ['14', 'Soft'], ['22', 'Round']])}</div>
    <div class="look-g"><span>Density</span>${seg('density', [['comfortable', 'Comfortable'], ['compact', 'Compact']])}</div>
    <div class="look-g"><span>Font</span>${seg('font', FONTS.map(f => [f, f.replace(' Sans', '').replace('Plus ', '')]))}</div>
    <div class="look-g"><span>Landscape art</span>${seg('art', [['true', 'On'], ['false', 'Off']])}</div>`;
}
function lookPanel() {
    return `<div class="looks${state.lookOpen ? ' open' : ''}">
    ${state.lookOpen ? `<div class="look-pop" role="dialog" aria-label="Try different looks"><div class="look-h"><b>${icon('palette')}Try a look</b><button class="icon-btn" data-action="look-toggle" aria-label="Close">${icon('x')}</button></div>${lookControls()}<button class="link sm" data-action="look-reset">Reset to default</button></div>` : ''}
    <button class="look-fab" data-action="look-toggle" aria-expanded="${state.lookOpen}">${icon('palette')}<span>Looks</span></button>
  </div>`;
}
function applyLook() {
    const L = state.look;
    const r = document.documentElement;
    if (L.mode === 'system')
        r.removeAttribute('data-theme');
    else
        r.setAttribute('data-theme', L.mode);
    r.dataset.style = L.style;
    r.dataset.density = L.density;
    r.dataset.prog = L.prog;
    r.style.setProperty('--accent', L.accent);
    r.style.setProperty('--radius', `${L.radius}px`);
    r.style.setProperty('--font', `'${L.font}', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif`);
    try {
        localStorage.setItem('veyra-look', JSON.stringify(L));
    }
    catch { /* ignore */ }
}
// ---------------------------------------------------------------- settings
function renderSettings() {
    const open = state.settingsOpen;
    const row = (k, ic, t, sub, body) => `<li class="set-row${open === k ? ' open' : ''}">
    <button class="set-h" data-action="set-open" data-k="${k}" aria-expanded="${open === k}">${icon(ic)}<span><b>${t}</b><small>${sub}</small></span>${icon(open === k ? 'chevD' : 'chevR', 'chev')}</button>
    ${open === k ? `<div class="set-b">${body}</div>` : ''}</li>`;
    const tog = (label, on, locked = false, note = '') => `<div class="tog-row"><span>${label}${note ? `<small>${note}</small>` : ''}</span><button class="tog${on ? ' on' : ''}${locked ? ' locked' : ''}" ${locked ? 'disabled' : 'data-action="tog"'} role="switch" aria-checked="${on}" aria-label="${label}"><i></i></button></div>`;
    return `<div class="page set-page">
    <header class="page-h"><div><h1>Settings</h1></div></header>
    <section class="card profile"><span class="avatar xl">${state.user.first[0]}${state.user.last[0]}</span><div><b>${esc(state.user.first)} ${esc(state.user.last)}</b><small class="muted">Year ${state.user.year} · ${esc(state.user.school)}</small><button class="link sm" data-action="set-open" data-k="account">Edit profile ${icon('arrowR')}</button></div></section>
    <ul class="set-list card">
      ${row('account', 'user', 'Account', 'Personal details, email, password', `<div class="fld-row"><label class="fld"><span>First name</span><input id="set-first" data-user="first" value="${esc(state.user.first)}"></label><label class="fld"><span>Last name</span><input id="set-last" data-user="last" value="${esc(state.user.last)}"></label></div><label class="fld"><span>School</span><input id="set-school" data-user="school" value="${esc(state.user.school)}"></label>`)}
      ${row('study', 'book', 'Study Preferences', 'Subjects, goals, available time', `<div class="fld"><span>How you prepare</span>${chips('prep', PREP)}</div>`)}
      ${row('ai', 'sparkle', 'Atlas Preferences', 'How Atlas explains things, sources, privacy', `${tog('Explain things at my year level', true)}${tog('Show sources with answers', true)}${tog('Suggest practice questions', false)}${tog('Atlas never writes assessment text for me', true, true, 'Always on. This is how Veyra works.')}`)}
      ${row('notif', 'bell', 'Notifications', 'Reminders, updates, email', `${tog('Daily target reminder', true)}${tog('Due date warnings', true)}${tog('Weekly progress email', false)}`)}
      ${row('look', 'palette', 'Appearance', 'Light / dark mode, colours, display', `<div class="look-inline">${lookControls()}</div>`)}
      ${row('help', 'help', 'Help & Support', 'FAQs, contact us', `<p class="muted">This is a front-end prototype. Nothing is saved to a server and the AI replies are scripted.</p>`)}
    </ul>
    <button class="btn danger" data-action="logout">${icon('logout')}Log out</button>
  </div>`;
}
// ---------------------------------------------------------------- render
const app = document.getElementById('app');
function page() {
    var _a, _b;
    const r = state.route;
    const a = findA(r.id);
    switch (r.name) {
        case 'dashboard': return renderDashboard();
        case 'assessments': return renderList(false);
        case 'exams': return renderList(true);
        case 'assessment': return a ? renderAssessment(a, (_a = r.tab) !== null && _a !== void 0 ? _a : 'overview') : renderDashboard();
        case 'section': {
            const s = findS(a, r.sec);
            return a && s ? renderSection(a, s) : renderDashboard();
        }
        case 'full': return a ? renderFull(a, (_b = r.tab) !== null && _b !== void 0 ? _b : 'doc') : renderDashboard();
        case 'study': return renderList(true);
        case 'chat': return renderChat();
        case 'progress': return renderProgress();
        case 'settings': return renderSettings();
        default: return renderDashboard();
    }
}
function render() {
    const r = state.route;
    const html = r.name === 'landing' ? renderLanding() : r.name === 'onboarding' ? renderOnboarding() : shell(page());
    app.innerHTML = html + (r.name === 'onboarding' ? '' : lookPanel()) + (state.toast ? `<div class="toast ${state.toastKind}" role="status">${state.toastKind === 'win' ? `<span class="burst">${icon('check')}</span>` : ''}${state.toast}</div>` : '');
    afterRender();
}
function afterRender() {
    setupLanding();
    fitQuiz();
    startFire();
    fitDash();
    startFly();
    animateRings();
    if (pageEnter)
        animatePageIn();
    pageEnter = false;
    app.querySelectorAll('.ed.full .ed-area').forEach(grow);
    app.querySelectorAll('.chat-log').forEach(l => { l.scrollTop = l.scrollHeight; });
}
function grow(t) {
    t.style.height = 'auto';
    t.style.height = `${Math.max(120, t.scrollHeight)}px`;
}
let toastTimer = 0;
function toast(msg, kind = '') {
    state.toast = msg;
    state.toastKind = kind;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => { state.toast = ''; const el = app.querySelector('.toast'); if (el)
        el.remove(); }, 3200);
}
function go(r) {
    state.history.push(state.route);
    state.route = r;
    state.navOpen = false;
    state.focus = r.name === 'section' ? state.focus : false;
    state.showOriginal = false;
    decodeOpen = false;
    pageEnter = true;
    render();
    window.scrollTo(0, 0);
}
function refreshLog(key) {
    app.querySelectorAll(`[data-log="${key}"]`).forEach(l => { l.innerHTML = msgsHtml(key); l.scrollTop = l.scrollHeight; });
}
function ask(key, q) {
    var _a;
    const text = q.trim();
    if (!text)
        return;
    const { a, s } = ctxFromKey(key);
    const list = (state.chats[key] = (_a = state.chats[key]) !== null && _a !== void 0 ? _a : []);
    list.push({ from: 'me', html: esc(text) }, { from: 'typing', html: '' });
    refreshLog(key);
    window.setTimeout(() => {
        list.pop();
        list.push({ from: 'ai', html: aiReply(text, a, s) });
        refreshLog(key);
    }, 650 + Math.random() * 500);
}
function updateSectionLive(a, s) {
    const key = `${a.id}:${s.id}`;
    app.querySelectorAll(`[data-back="${key}"]`).forEach(b => { b.innerHTML = highlight(s.text, s.ignored); });
    app.querySelectorAll(`[data-wc="${key}"], [data-wc2="${key}"]`).forEach(el => { el.innerHTML = wcHtml(s); });
    app.querySelectorAll(`[data-wcbar="${key}"]`).forEach(el => { el.innerHTML = bar(Math.min(1, words(s.text) / s.limit), words(s.text) > s.limit ? 'over' : ''); });
    app.querySelectorAll(`[data-issues="${key}"]`).forEach(el => { el.innerHTML = issuesHtml(a, s); });
    app.querySelectorAll(`[data-total="${a.id}"]`).forEach(el => { el.innerHTML = totalHtml(a); });
}
function addFiles(list, target) {
    if (!list)
        return;
    for (const f of Array.from(list)) {
        const n = f.name.toLowerCase();
        const kind = /rubric|criteria|marking/.test(n) ? 'Rubric' : /scaffold/.test(n) ? 'Scaffold' : /notif|task/.test(n) ? 'Notification' : /\.(ppt|pptx|key)$/.test(n) ? 'Slides' : 'Other';
        target.push({ name: f.name, kind });
    }
}
// ---------------------------------------------------------------- events
document.addEventListener('click', e => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    const t = e.target.closest('[data-action]');
    if (!t)
        return;
    const d = t.dataset;
    const a = findA(d.id);
    const s = findS(a, d.sec);
    const o = state.onb;
    switch (d.action) {
        case 'go':
            go({ name: d.to, id: d.id, sec: d.sec, tab: d.tab });
            break;
        case 'menu':
            state.navOpen = !state.navOpen;
            render();
            break;
        case 'tab':
            state.route = { ...state.route, tab: d.tab };
            render();
            break;
        case 'toggle-original':
            state.showOriginal = !state.showOriginal;
            render();
            break;
        case 'filter':
            state.filter = (_a = d.value) !== null && _a !== void 0 ? _a : 'all';
            render();
            break;
        case 'new-assessment':
            state.onb = freshOnb((_b = d.kind) !== null && _b !== void 0 ? _b : 'essay');
            onbAnim = 'fwd';
            if (d.step)
                state.onb.step = QS.findIndex(q => q.key === 'files');
            go({ name: 'onboarding' });
            break;
        case 'check':
            if (a && s) {
                const item = s.checklist.find(c => c.id === d.item);
                if (item) {
                    item.done = !item.done;
                    if (item.done && s.checklist.every(c => c.done) && !s.complete)
                        toast('Every requirement ticked. Mark the section complete when you’re happy with it.');
                }
                render();
            }
            break;
        case 'complete':
            if (a && s) {
                s.complete = true;
                state.activity.unshift({ text: `${a.title}: ${s.title}`, sub: 'Section complete', at: Date.now(), tone: 'done' });
                toast(`${esc(s.title)} complete. ${esc(a.title)} is ${pct(aProgress(a))}% done.`, 'win');
                render();
            }
            break;
        case 'reopen':
            if (s) {
                s.complete = false;
                toast(`${esc(s.title)} reopened.`);
                render();
            }
            break;
        case 'apply':
        case 'ignore':
            if (a && s) {
                const issue = findIssues(s.text, s.ignored)[Number(d.n)];
                if (issue) {
                    if (d.action === 'apply')
                        s.text = s.text.slice(0, issue.start) + issue.fix + s.text.slice(issue.end);
                    else
                        s.ignored.push(`${issue.word}|${issue.fix}`);
                    const ta = app.querySelector(`[data-editor="${a.id}:${s.id}"]`);
                    if (ta && d.action === 'apply')
                        ta.value = s.text;
                    updateSectionLive(a, s);
                }
            }
            break;
        case 'focus':
            state.focus = !state.focus;
            render();
            break;
        case 'ask':
            ask((_c = d.key) !== null && _c !== void 0 ? _c : 'global', (_d = d.q) !== null && _d !== void 0 ? _d : '');
            break;
        case 'plan-day':
            planSel = (_e = d.day) !== null && _e !== void 0 ? _e : '';
            render();
            break;
        case 'away':
            if (a && d.day) {
                const i = a.away.indexOf(d.day);
                if (i >= 0)
                    a.away.splice(i, 1);
                else
                    a.away.push(d.day);
                render();
            }
            break;
        case 'look-toggle':
            state.lookOpen = !state.lookOpen;
            render();
            break;
        case 'look': {
            const k = d.key;
            const v = (_f = d.value) !== null && _f !== void 0 ? _f : '';
            const L = state.look;
            L[k] = k === 'radius' ? Number(v) : k === 'art' ? v === 'true' : v;
            applyLook();
            render();
            break;
        }
        case 'look-reset':
            state.look = { ...DEFAULT_LOOK };
            applyLook();
            render();
            break;
        // onboarding
        case 'onb-toggle': {
            const f = d.field;
            const arr = o[f];
            const v = (_g = d.value) !== null && _g !== void 0 ? _g : '';
            const i = arr.indexOf(v);
            if (i >= 0)
                arr.splice(i, 1);
            else
                arr.push(v);
            render();
            break;
        }
        case 'onb-pick': {
            const f = d.field;
            const v = (_h = d.value) !== null && _h !== void 0 ? _h : '';
            o[f] = f === 'confidence' || f === 'strict' ? Number(v) : v;
            if (f === 'kind' && v === 'exam')
                o.words = 0;
            else if (f === 'kind' && !o.words)
                o.words = 1200;
            o.error = '';
            render();
            break;
        }
        case 'onb-busy': {
            const v = Number(d.value);
            const i = o.busy.indexOf(v);
            if (i >= 0)
                o.busy.splice(i, 1);
            else
                o.busy.push(v);
            render();
            break;
        }
        case 'onb-away':
            o.away = d.value === '1';
            render();
            break;
        case 'onb-sample':
            o.files.push({ name: 'Assessment 5 Notification.pdf', kind: 'Notification' }, { name: 'Assessment 5 Planner.pdf', kind: 'Scaffold' }, { name: 'Career Profile Report.pdf', kind: 'Notes' });
            render();
            break;
        case 'onb-rmdraft':
            o.drafts.splice(Number(d.i), 1);
            render();
            break;
        case 'onb-sample-draft':
            o.drafts.push({ name: 'Part A reflection – draft.docx', kind: 'Draft' }, { name: 'Career Profile notes.pdf', kind: 'Draft' });
            render();
            break;
        case 'onb-rmfile':
            o.files.splice(Number(d.i), 1);
            render();
            break;
        case 'onb-back':
            onbBack();
            break;
        case 'onb-next':
            onbNext();
            break;
        case 'onb-finish': {
            const na = isPdhpeDemo(o) ? pdhpeFromSetup(o) : genAssessment(o);
            if (na.brief === PDHPE_BRIEF)
                state.assessments = state.assessments.filter(x => x.id !== 'pdhpe');
            state.assessments.push(na);
            state.activity.unshift({ text: na.title, sub: 'Roadmap created', at: Date.now(), tone: 'new' });
            toast(`${esc(na.title)} is ready. Here’s your roadmap.`, 'win');
            state.history = [];
            go({ name: 'assessment', id: na.id });
            break;
        }
        // study
        case 'study-src':
            state.study = { ...state.study, aId: (_j = d.id) !== null && _j !== void 0 ? _j : 'science', card: 0, flipped: false, q: 0, picked: null, score: 0 };
            render();
            break;
        case 'study-mode':
            state.study.mode = d.mode;
            render();
            break;
        case 'flip':
            state.study.flipped = !state.study.flipped;
            render();
            break;
        case 'card': {
            const n = ((_k = CARDS[state.study.aId]) !== null && _k !== void 0 ? _k : CARDS.science).length;
            state.study.card = (state.study.card + Number(d.d) + n) % n;
            state.study.flipped = false;
            render();
            break;
        }
        case 'pick': {
            const q = ((_l = QUIZ[state.study.aId]) !== null && _l !== void 0 ? _l : QUIZ.science)[state.study.q];
            state.study.picked = Number(d.i);
            if (state.study.picked === q.a)
                state.study.score++;
            render();
            break;
        }
        case 'quiz-next':
            state.study.q++;
            state.study.picked = null;
            if (state.study.q >= ((_m = QUIZ[state.study.aId]) !== null && _m !== void 0 ? _m : QUIZ.science).length)
                state.activity.unshift({ text: `${(_p = (_o = findA(state.study.aId)) === null || _o === void 0 ? void 0 : _o.title) !== null && _p !== void 0 ? _p : ''} practice quiz`, sub: `Completed · ${state.study.score}/${((_q = QUIZ[state.study.aId]) !== null && _q !== void 0 ? _q : QUIZ.science).length}`, at: Date.now(), tone: 'done' });
            render();
            break;
        case 'quiz-reset':
            Object.assign(state.study, { q: 0, picked: null, score: 0 });
            render();
            break;
        // chat page / progress / settings
        case 'chat-ctx':
            state.chatCtx = (_r = d.id) !== null && _r !== void 0 ? _r : 'global';
            render();
            break;
        case 'prog-tab':
            state.progTab = (_s = d.tab) !== null && _s !== void 0 ? _s : 'overview';
            pageEnter = true;
            render();
            break;
        case 'set-open':
            state.settingsOpen = state.settingsOpen === d.k ? '' : (_t = d.k) !== null && _t !== void 0 ? _t : '';
            render();
            break;
        case 'tog':
            t.classList.toggle('on');
            t.setAttribute('aria-checked', String(t.classList.contains('on')));
            break;
        case 'atlas-demo': {
            atlasDemo = Number(d.i);
            const q = app.querySelector('[data-meet-q]');
            const a = app.querySelector('[data-meet-a]');
            if (q && a) {
                q.textContent = MEET[atlasDemo][0];
                a.innerHTML = '<span class="dots"><i></i><i></i><i></i></span>';
                (_u = q.parentElement) === null || _u === void 0 ? void 0 : _u.classList.remove('pop');
                void q.offsetWidth;
                (_v = q.parentElement) === null || _v === void 0 ? void 0 : _v.classList.add('pop');
                window.setTimeout(() => { a.innerHTML = MEET[atlasDemo][1]; }, 650);
            }
            app.querySelectorAll('[data-action="atlas-demo"]').forEach((b, n) => b.classList.toggle('on', n === atlasDemo));
            break;
        }
        case 'plan': {
            planView = d.v === 'free' ? 'free' : 'premium';
            const box = app.querySelector('[data-premium]');
            if (box)
                box.outerHTML = premiumCard();
            break;
        }
        case 'premium-cta':
            toast('Premium checkout isn’t part of this prototype yet.');
            break;
        case 'rail':
            railJump(Number(d.i));
            break;
        case 'rail-next':
            railJump(2);
            break;
        case 'jterm': {
            jd.term = Number(d.v);
            refreshJv(2);
            break;
        }
        case 'aterm': {
            state.term = Number(d.v);
            render();
            break;
        }
        case 'decode-open':
            decodeOpen = true;
            render();
            break;
        case 'decode-close':
            decodeOpen = false;
            render();
            break;
        case 'jd':
            journeyAction((_w = d.k) !== null && _w !== void 0 ? _w : '', (_x = d.v) !== null && _x !== void 0 ? _x : '');
            break;
        case 'jstep':
            goStep(Number(d.i));
            break;
        case 'jskip': {
            const el = document.getElementById('after-how');
            if (el)
                window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - 20, behavior: reduceMotion() ? 'auto' : 'smooth' });
            break;
        }
        case 'logout':
            state.history = [];
            go({ name: 'landing' });
            break;
    }
});
document.addEventListener('mouseover', e => {
    const t = e.target.closest('.dc-term');
    if (!t || t.classList.contains('on'))
        return;
    const n = Number(t.dataset.v);
    if (t.dataset.action === 'jterm') {
        jd.term = n;
        refreshJv(2);
    }
    else if (t.dataset.action === 'aterm') {
        state.term = n;
        app.querySelectorAll('.dc-term[data-action="aterm"]').forEach(x => x.classList.toggle('on', Number(x.dataset.v) === n));
        const a = findA(state.route.id);
        const ms = app.querySelectorAll('[data-ameaning]');
        if (a && ms.length) {
            const [ph, mean] = briefFor(a).decode[n];
            ms.forEach(m => { m.innerHTML = `<small>“${esc(ph)}” means</small><b>${esc(mean)}</b>`; });
        }
    }
});
document.addEventListener('input', e => {
    var _a;
    const t = e.target;
    const d = t.dataset;
    if ('jdtext' in d) {
        jd.text = t.value;
        const n = words(t.value);
        app.querySelectorAll('[data-jdwc]').forEach(el => { el.textContent = `${n} / 60 words`; el.classList.toggle('over', n > 60); });
        app.querySelectorAll('[data-jdtext]').forEach(o => { if (o !== t)
            o.value = t.value; });
        return;
    }
    if (d.editor) {
        const [aid, sid] = d.editor.split(':');
        const a = findA(aid);
        const s = findS(a, sid);
        if (!a || !s)
            return;
        s.text = t.value;
        if (t instanceof HTMLTextAreaElement && t.closest('.ed.full'))
            grow(t);
        updateSectionLive(a, s);
    }
    else if (d.notes) {
        const [aid, sid] = d.notes.split(':');
        const s = findS(findA(aid), sid);
        if (s)
            s.notes = t.value;
    }
    else if (d.onb) {
        const k = d.onb;
        const rec = state.onb;
        rec[k] = k === 'words' || k === 'hours' ? Number(t.value) : t.value;
        if (k === 'hours') {
            const out = document.getElementById('onb-hours-out');
            if (out)
                out.innerHTML = `${t.value}<small>h</small>`;
        }
        const say = app.querySelector('[data-say]');
        const q = QS[state.onb.step];
        if (say && q)
            say.textContent = q.react(state.onb);
        if (state.onb.error) {
            state.onb.error = '';
            (_a = app.querySelector('.qz-err')) === null || _a === void 0 ? void 0 : _a.remove();
        }
    }
    else if (d.user) {
        state.user[d.user] = t.value;
    }
});
document.addEventListener('change', e => {
    const t = e.target;
    if (t.id === 'onb-files' && t instanceof HTMLInputElement) {
        addFiles(t.files, state.onb.files);
        render();
    }
    if (t.id === 'onb-draft-files' && t instanceof HTMLInputElement) {
        addFiles(t.files, state.onb.drafts);
        render();
    }
    if (t.dataset.res && t instanceof HTMLInputElement) {
        const a = findA(t.dataset.res);
        if (a) {
            addFiles(t.files, a.resources);
            toast('Resources added.');
            render();
        }
    }
    if (t.dataset.file !== undefined) {
        const f = state.onb.files[Number(t.dataset.file)];
        if (f)
            f.kind = t.value;
    }
});
document.addEventListener('scroll', e => {
    const t = e.target;
    if (t instanceof HTMLTextAreaElement && t.dataset.editor) {
        const back = t.previousElementSibling;
        if (back)
            back.scrollTop = t.scrollTop;
    }
}, true);
document.addEventListener('submit', e => {
    const f = e.target;
    if (!f.dataset.chat)
        return;
    e.preventDefault();
    const input = f.querySelector('input');
    ask(f.dataset.chat, input.value);
    input.value = '';
});
// Drag and drop files onto any upload area (and never let the browser open a dropped file instead)
const DROP_SEL = '.drop, .qz-drop';
function dropTarget(e) {
    var _a;
    return (_a = e.target.closest(DROP_SEL)) !== null && _a !== void 0 ? _a : (state.route.name === 'onboarding' ? app.querySelector('.qz-drop') : null);
}
document.addEventListener('dragover', e => {
    var _a, _b;
    const hasFiles = Array.from((_b = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.types) !== null && _b !== void 0 ? _b : []).includes('Files');
    if (!hasFiles)
        return;
    e.preventDefault();
    const t = dropTarget(e);
    if (e.dataTransfer)
        e.dataTransfer.dropEffect = t ? 'copy' : 'none';
    app.querySelectorAll(DROP_SEL).forEach(el => el.classList.toggle('over', el === t));
});
document.addEventListener('dragleave', e => {
    if (!e.relatedTarget)
        app.querySelectorAll(DROP_SEL).forEach(el => el.classList.remove('over'));
});
document.addEventListener('drop', e => {
    var _a, _b, _c, _d;
    const hasFiles = Array.from((_b = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.types) !== null && _b !== void 0 ? _b : []).includes('Files');
    if (!hasFiles)
        return;
    e.preventDefault();
    const t = dropTarget(e);
    app.querySelectorAll(DROP_SEL).forEach(el => el.classList.remove('over'));
    if (!t)
        return;
    const files = (_d = (_c = e.dataTransfer) === null || _c === void 0 ? void 0 : _c.files) !== null && _d !== void 0 ? _d : null;
    if (t.id === 'onb-drop') {
        addFiles(files, state.onb.files);
        render();
        return;
    }
    if (t.id === 'onb-draft-drop') {
        addFiles(files, state.onb.drafts);
        render();
        return;
    }
    const input = t.querySelector('input[type=file]');
    const a = findA(input === null || input === void 0 ? void 0 : input.dataset.res);
    if (a) {
        addFiles(files, a.resources);
        toast('Resources added.');
        render();
    }
});
document.addEventListener('keydown', e => {
    if (state.route.name === 'onboarding' && state.onb.step < QS.length) {
        const typing = e.target.closest('input, textarea, select');
        if (e.key === 'Enter' && !e.shiftKey && !e.target.closest('textarea, button')) {
            e.preventDefault();
            onbNext();
            return;
        }
        if (!typing && /^[1-9]$/.test(e.key)) {
            const b = app.querySelectorAll('.qz-body .qo')[Number(e.key) - 1];
            if (b) {
                b.click();
                return;
            }
        }
    }
    if (e.key === 'Escape') {
        if (state.lookOpen) {
            state.lookOpen = false;
            render();
        }
        else if (state.navOpen) {
            state.navOpen = false;
            render();
        }
        else if (state.focus) {
            state.focus = false;
            render();
        }
    }
});
applyLook();
render();

