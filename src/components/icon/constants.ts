export const TYPE_PATH_MAP = {
  'up': 'M205.227 698.027a34.133 34.133 0 0 1-48.214-48.214L488.96 317.867a34.133 34.133 0 0 1 48.213 0L869.12 649.813a34.133 34.133 0 0 1-48.213 48.214L512 390.4z',
  'down': 'M820.48 317.867a34.133 34.133 0 1 1 48.213 48.213L536.747 698.027a34.133 34.133 0 0 1-48.214 0l-331.52-331.52a34.133 34.133 0 1 1 48.214-48.64L512 625.92z',
  'left': 'M703.147 815.787A34.133 34.133 0 0 1 654.933 864L322.987 532.48a34.133 34.133 0 0 1 0-48.213L654.933 152.32a34.133 34.133 0 0 1 48.214 48.213L395.093 508.14z',
  'right': 'M322.987 200.533A34.133 34.133 0 1 1 371.2 152.32l331.947 331.947a34.133 34.133 0 0 1 0 48.213L371.2 864a34.133 34.133 0 1 1-48.213-48.213L630.613 508.14z',
  'double-up': 'M204.373 872.533a34.133 34.133 0 0 1-48.213-48.213l331.947-331.947a34.133 34.133 0 0 1 48.213 0L868.267 824.32a34.133 34.133 0 0 1-48.214 48.213L512 564.907z m0-341.333a34.133 34.133 0 0 1-48.213-48.213L488.107 151.04a34.133 34.133 0 0 1 48.213 0l331.947 331.947a34.133 34.133 0 0 1-48.214 48.213L512 223.573z',
  'double-down': 'M819.627 151.467a34.133 34.133 0 1 1 48.213 48.213L535.893 531.627a34.133 34.133 0 0 1-48.213 0L156.16 199.68a34.133 34.133 0 1 1 48.213-48.213L512 459.093z m0 341.333a34.133 34.133 0 1 1 48.213 48.213L535.893 872.96a34.133 34.133 0 0 1-48.213 0L156.16 541.013a34.133 34.133 0 0 1 48.213-48.213L512 800.427z',
  'double-left': 'M872.533 819.627a34.133 34.133 0 0 1-48.213 48.213L492.373 535.893a34.133 34.133 0 0 1 0-48.213L824.32 155.733a34.133 34.133 0 0 1 48.213 48.214L564.907 512z m-341.333 0a34.133 34.133 0 0 1-48.213 48.213l-331.52-331.52a34.133 34.133 0 0 1 0-48.213L483.413 156.14a34.133 34.133 0 0 1 48.214 48.213L223.573 512z',
  'double-right': 'M151.467 204.373a34.133 34.133 0 1 1 48.213-48.213l331.947 331.947a34.133 34.133 0 0 1 0 48.213L199.68 867.84a34.133 34.133 0 1 1-48.213-48.213L459.093 512z m341.333 0a34.133 34.133 0 0 1 48.213-48.213L872.96 488.107a34.133 34.133 0 0 1 0 48.213L541.013 868.267a34.133 34.133 0 0 1-48.213-48.214L800.427 512z',
  'close': 'M463.787 512l-253.44-253.44a34.133 34.133 0 0 1 48.213-48.213L512 463.787l253.44-253.44a34.133 34.133 0 1 1 48.213 48.213L560.213 512l253.44 253.44a34.133 34.133 0 1 1-48.213 48.213L512 560.213l-253.44 253.44a34.133 34.133 0 0 1-48.213-48.213z',
  'search': 'M941.568 891.904l-156.672-156.672c58.88-70.144 94.72-160.768 94.72-259.072 0-222.72-181.248-403.456-403.456-403.456-222.72 0-403.456 181.248-403.456 403.456 0 222.72 181.248 403.456 403.456 403.456 98.816 0 188.928-35.84 259.072-94.72l156.672 156.672c6.656 6.656 15.872 10.24 25.088 10.24 9.216 0 17.92-3.584 25.088-10.24 13.312-13.824 13.312-36.352-0.512-49.664zM142.848 476.16c0-183.808 149.504-333.312 333.312-333.312s332.8 149.504 332.8 333.312c0 183.808-149.504 333.312-333.312 333.312s-332.8-150.016-332.8-333.312z',
  'edit': 'M815.530015 959.469288 195.138352 959.469288c-32.114418 0-65.541739-14.130835-90.841961-39.431058-25.299199-25.300222-40.307008-57.850569-40.307008-89.964988L63.989383 185.219445c0-33.147958 15.633049-63.797002 43.11496-85.248569 24.100908-18.813484 55.6873-29.753651 88.035032-29.753651l336.698438 0c16.888645 0 30.579459 13.81054 30.579459 30.699186s-13.690814 30.699186-30.579459 30.699186L195.138352 131.615597c-33.180703 0-69.750597 21.060665-69.750597 53.603849l0 644.85482c0 33.530674 36.220946 67.997674 69.750597 67.997674l620.391662 0c32.54216 0 51.754734-34.81697 51.754734-67.997674L867.284749 497.453702c0-16.888645 13.81054-30.579459 30.699186-30.579459s30.699186 13.690814 30.699186 30.579459l0 332.620563c0 32.347732-10.015098 63.056128-28.827559 87.158059C878.403994 944.714236 848.678996 959.469288 815.530015 959.469288zM488.650199 550.213323c-9.912767 0-19.826558-3.78214-27.389814-11.346419-15.126512-15.126512-15.126512-39.650045 0-54.776557L870.335225 75.016531c15.126512-15.126512 39.652092-15.126512 54.778604 0s15.126512 39.650045 0 54.776557L516.03899 538.866904C508.475733 546.431184 498.561943 550.213323 488.650199 550.213323z',
  'calendar': 'M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z',
  'email': 'M927.296 106.666667H96.704C43.264 106.666667 0 150.314667 0 204.245333v616.085334C0 873.92 43.029333 917.333333 96.149333 917.333333h831.146667C980.48 917.333333 1024 873.450667 1024 819.754667V204.352C1024 150.656 980.501333 106.666667 927.296 106.666667zM66.709333 348.714667V196.970667c0-12.928 10.432-23.317333 23.125334-23.317334h844.437333c12.8 0 23.125333 10.496 23.125333 23.317334v151.616l-436.757333 175.189333a22.912 22.912 0 0 1-17.066667 0L66.752 348.714667z m0 71.829333l444.202667 178.176 1.152 0.469333 445.333333-178.773333v406.613333c0 12.928-10.432 23.317333-23.125333 23.317334H89.813333c-12.8 0-23.104-10.496-23.104-23.317334V420.544z',
  'link': 'M506.642286 688.566857l56.996571-57.856c-56.557714-4.278857-93.421714-21.430857-121.289143-49.28-74.989714-75.008-74.569143-181.284571-0.420571-255.433143l139.702857-139.702857c75.008-74.587429 180.443429-75.008 255.012571 0 75.428571 74.989714 74.569143 180.845714 0.438858 254.994286l-84.004572 84.004571c11.995429 27.428571 14.573714 59.136 10.276572 86.985143l125.568-125.568c102.875429-102.857143 103.716571-248.137143-0.420572-352.274286-104.137143-104.155429-249.417143-103.296-352.292571-0.438857l-146.139429 146.578286c-102.857143 102.857143-103.716571 248.576 0.438857 352.274286 26.989714 27.008 61.275429 46.299429 116.132572 55.716571z m10.715428-353.133714l-56.996571 57.856c56.576 4.717714 93.44 21.430857 121.289143 49.28 74.989714 75.008 74.569143 181.284571 0.420571 255.433143l-140.141714 139.702857c-74.569143 74.587429-180.425143 75.008-254.994286 0.438857-75.008-75.428571-74.569143-180.845714 0-255.433143l83.986286-84.004571c-11.995429-26.989714-14.994286-59.136-10.697143-86.985143l-125.586286 125.568c-102.418286 102.857143-103.277714 248.576 0.438857 352.274286 104.137143 104.155429 249.856 103.296 352.274286 0.859428l146.578286-146.998857c102.857143-102.857143 103.716571-248.557714-0.420572-352.274286-27.008-27.008-61.293714-46.299429-116.150857-55.716571z',
  'loading': 'M511.68 0.00008C228.800044 0.16008-0.15992 229.600044 0.00008 512.32 0.16008 795.199956 229.600044 1024.15992 512.32 1023.99992c141.439978-0.16 269.279958-57.439991 361.919943-150.239977 6.879999-6.879999 11.199998-16.479997 11.199999-27.199995 0-21.279997-17.279997-38.399994-38.399994-38.399994-10.559998 0-20.159997 4.319999-27.199996 11.199998-78.719988 78.879988-187.519971 127.67998-307.679952 127.67998-240.159962 0.32-435.199932-194.39997-435.359932-434.719932C76.640068 272.000037 271.360038 76.960068 511.68 76.800068 751.999963 76.640068 947.039932 271.360038 947.199932 511.68c0 21.279997 17.279997 38.399994 38.399994 38.399994 21.279997 0 38.399994-17.279997 38.399994-38.399994C1023.83992 228.800044 794.399956-0.15992 511.68 0.00008z',
  'close-circle-fill': 'M874.037543 149.961337c-199.947609-199.947609-524.127976-199.948609-724.076586 0-199.947609 199.947609-199.947609 524.128976 0 724.076586s524.128976 199.947609 724.076586 0 199.947609-524.128976 0-724.076586zM734.736815 692.311278c11.666977 11.666977 11.666977 30.75894 0 42.425917-11.666977 11.666977-30.75894 11.666977-42.425917 0L511.99925 554.425547 331.687602 734.738195c-11.666977 11.666977-30.75894 11.666977-42.425917 0s-11.666977-30.75894 0-42.425917L469.573333 511.99963 289.260685 331.687982c-11.666977-11.666977-11.666977-30.75894 0-42.425917s30.75894-11.666977 42.425917 0L511.99925 469.573713l180.311648-180.311648c11.666977-11.667977 30.75894-11.667977 42.426917-0.001 11.666977 11.666977 11.666977 30.75894 0 42.425917L554.425167 511.99963l180.311648 180.311648z',
  'success-circle-fill': 'M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z m-72.767-381.481L287.205 490.49c-17.183-17.183-45.043-17.183-62.226 0s-17.183 45.042 0 62.225L439.233 766.97l360.624-360.625c17.183-17.183 17.183-45.042 0-62.225s-45.042-17.183-62.225 0l-298.4 298.399z',
  'info-circle-fill': 'M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z m44-256V428.508c0-24.301-19.7-44-44-44s-44 19.699-44 44V768c0 24.3 19.7 44 44 44s44-19.7 44-44z m-44-428c35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64z',
  'sigh-circle-fill': 'M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m44 256v339.492c0 24.301-19.7 44-44 44s-44-19.699-44-44V256c0-24.3 19.7-44 44-44s44 19.7 44 44z m-44 428c35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64z',
  'doubt-circle-fill': 'M512 0c282.3168 0 512 229.6832 512 512 0 282.2656-229.6832 512-512 512C229.632 1024 0 794.3168 0 512 0 229.632 229.632 0 512 0z m-59.1872 780.7488a51.072 51.072 0 0 0 51.3024 52.6336c29.9776 0.384 52.2752-21.248 52.48-51.1744 0.1536-29.2864-21.4272-51.0208-51.0464-51.456-29.2608-0.4096-52.3776 21.504-52.736 49.9968z m195.7376-288.9472a150.272 150.272 0 0 0 21.1456-23.3216c24.4224-34.9696 31.3088-74.496 27.5712-116.2752-5.1712-56.1408-31.7184-98.6368-81.92-125.312-34.816-18.5088-72.6272-22.0928-111.3088-21.0176-85.7344 2.2784-151.3984 52.8896-174.336 135.3472a198.4512 198.4512 0 0 0-7.3728 65.6896h66.944c1.664-13.9776 2.3552-27.5968 4.9152-40.96 8.4736-43.5456 29.0816-78.2848 73.6512-93.0048a147.5328 147.5328 0 0 1 96.1024 1.024c22.9888 7.6288 41.856 24.32 52.1984 46.2336 20.5824 42.1376 13.3888 95.232-18.5856 129.4848-17.024 18.176-35.456 35.072-53.1456 52.48-25.5232 25.2416-50.3808 50.9184-63.5904 85.3248-10.2144 26.6752-12.288 54.1184-10.4448 82.432h67.7888c0.512-1.1776 1.024-1.792 1.1008-2.4064 0.1536-3.5328 0.3328-7.04 0.2304-10.496-1.28-43.8784 15.8976-79.7696 47.8208-109.056 20.352-18.7904 41.0624-37.1968 61.2608-56.1664h-0.0256z',
  'github-circle-fill': 'M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48a491.296 491.296 0 0 1 128.16-17.248c43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576C877.472 942.624 1024 750.784 1024 524.64c0-282.784-229.248-512-512-512z',
};
