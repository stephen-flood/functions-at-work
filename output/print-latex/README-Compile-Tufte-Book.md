# Changes made to compile under `tufte-book`

1. Install `tufte-latex` package.  
2. Change ***document class***
    ```
    \documentclass{tufte-book}
    ```

3. Make the following ***change*** to the definition of the paragraphs environment, since `tufte-latex` does not implement `subparagraph`.
    - Search for  
        ```
        \NewDocumentEnvironment{paragraphs}{mm}
        {\subparagraph*{#1}\hypertarget{#2}{}}{}
        ```
    - and replace with 
        ```
        \NewDocumentEnvironment{paragraphs}{mm}
        {\paragraph*{#1}\hypertarget{#2}{}}{}
        ```

4. A number of packages and configurations needed to be ***commented out*** due to package conflicts.

    ```
    %\usepackage{geometry}
    %\usepackage{xcolor}
    ```

    ```
    %\usepackage[explicit, newparttoc, pagestyles]{titlesec}
    %\newtitlemark{\chaptertitlename}
    ```

    ```
    %\renewpagestyle{plain}{%
    %\setfoot{}{\pagefont\thepage}{}%
    %}%
    %\renewpagestyle{headings}{%
    %\sethead{\pagefont\slshape\MakeUppercase{\ifthechapter{\chaptertitlename\space\thechapter.\space}{}\chaptertitle}}{}{\pagefont\thepage}%
    %}%
    %\pagestyle{headings}
    ```

    ```
    %\titleformat{\part}[display]
    %{\divisionfont\Huge\bfseries\centering}{\divisionnameptx\space\thepart}{30pt}{\Huge#1}
    %[{\Large\centering\authorsptx}]
    %\titleformat{\chapter}[display]
    %{\divisionfont\huge\bfseries}{\divisionnameptx\space\thechapter}{20pt}{\Huge#1}
    %[{\Large\authorsptx}]
    %\titleformat{name=\chapter,numberless}[display]
    %{\divisionfont\huge\bfseries}{}{0pt}{#1}
    %[{\Large\authorsptx}]
    %\titlespacing*{\chapter}{0pt}{50pt}{40pt}
    %\titleformat{\section}[hang]
    %{\divisionfont\Large\bfseries}{\thesection}{1ex}{#1}
    %[{\large\authorsptx}]
    %\titleformat{name=\section,numberless}[block]
    %{\divisionfont\Large\bfseries}{}{0pt}{#1}
    %[{\large\authorsptx}]
    %\titlespacing*{\section}{0pt}{3.5ex plus 1ex minus .2ex}{2.3ex plus .2ex}
    %\titleformat{\subsection}[hang]
    %{\divisionfont\large\bfseries}{\thesubsection}{1ex}{#1}
    %[{\normalsize\authorsptx}]
    %\titleformat{name=\subsection,numberless}[block]
    %{\divisionfont\large\bfseries}{}{0pt}{#1}
    %[{\normalsize\authorsptx}]
    %\titlespacing*{\subsection}{0pt}{3.25ex plus 1ex minus .2ex}{1.5ex plus .2ex}
    %\titleformat{\subsubsection}[hang]
    %{\divisionfont\normalsize\bfseries}{\thesubsubsection}{1em}{#1}
    %[{\small\authorsptx}]
    %\titleformat{name=\subsubsection,numberless}[block]
    %{\divisionfont\normalsize\bfseries}{}{0pt}{#1}
    %[{\normalsize\authorsptx}]
    %\titlespacing*{\subsubsection}{0pt}{3.25ex plus 1ex minus .2ex}{1.5ex plus .2ex}
    %\titleformat{\paragraph}[hang]
    %{\divisionfont\normalsize\bfseries}{\theparagraph}{1em}{#1}
    %[{\small\authorsptx}]
    %\titleformat{name=\paragraph,numberless}[block]
    %{\divisionfont\normalsize\bfseries}{}{0pt}{#1}
    %[{\normalsize\authorsptx}]
    %\titlespacing*{\paragraph}{0pt}{3.25ex plus 1ex minus .2ex}{1.5em}
    ```

    ```
    %\titleformat{\subparagraph}[runin]{\normalfont\normalsize\bfseries}{\thesubparagraph}{1em}{#1}
    %\titlespacing*{\subparagraph}{0pt}{3.25ex plus 1ex minus .2ex}{1em}
    ```
