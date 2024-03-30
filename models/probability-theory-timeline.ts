export default [
  {
    name: "$\\sigma$-field",
    type: "definition",
    content: `A $\\sigma$-field $\\mathcal{F}$ on a set $\\Omega$ is a collection of subsets of $\\Omega$ such that
              <br/> 
                1) $\\Omega\\in\\mathcal{F}$,
              <br/>
                2) $A\\in\\mathcal{F}$ implies $A^c\\in\\mathcal{F}$,
              <br/>
                3) $\\{A_n\\}_{n=1}^{\\infty}\\subset\\mathcal{F}$ implies $\\cup_{n=1}^{\\infty}A_n\\in\\mathcal{F}$.
              `
    ,
    dependants: [],
    implications: [
      {
        name: "",
        type: "note",
        content: "In probability, $\\Omega$ is called the <i>sample space</i>, each element $\\omega\\in\\Omega$ is an <i>outcome</i> and $\\mathcal{F}$ is the set of <i>events</i>.",
        dependants: [],
      },
      {
        name: "",
        type: "example",
        content: "The Borel $\\sigma$-field on $\\mathbb{R}$, denoted by $\\mathcal{B}(\\mathbb{R})$ is the $\\sigma$-field generated by open subsets of $\\mathbb{R}$.",
        dependants: [],
      },
    ]
  },
  {
    name: "Probability",
    type: "definition",
    content: "A probability measure $\\mathbb{P}$ on a mesurable space $(\\Omega, \\mathcal{F})$ is a measure satisfying $\\mathbb{P}(\\Omega)=1$.",
    dependants: [],
    implications: [
      {
        name: "",
        type: "note",
        content: "The triplet $(\\Omega,\\mathcal{F},\\mathbb{P})$ is called a probability space. We shall use this notation from now on",
        dependants: [],
      },
      {
        name: "",
        type: "corollary",
        content: "Let $A$ be an event such that $\\mathbb{P}(A) > 0$. Then the function $\\mathbb{P}(\\cdot|A):\\mathcal{F}\\to\\mathbb{R}$ defined by $\\mathbb{P}(X|A)=\\dfrac{\\mathbb{P}(X\\cap A)}{\\mathbb{A}}$ is another probability measure, called the <i>probability condition on event $A$ </i>.",
        dependants: [],
      },
    ]
  },
  {
    name: "Independence",
    type: "definition",
    content: "A family of events $\\{A_i\\}_{i\\in I}$ is independent if for any indices $i_1,\\cdots,i_k$ in $I$ ($k\\in\\mathbb{N}^*$), we have $$\\mathbb{P}(A_{i_1}\\cdots A_{i_k}) = \\mathbb{P}(A_{i_1})\\cdots \\mathbb{P}(A_{i_k})$$.",
    dependants: [

    ],
  },
  {
    name: "Random variable",
    type: "definition",
    content: "A Borel measurable function $X:\\Omega\\to\\mathbb{R}$ is called a random variable. A tuple $(X_1,\\cdots,X_n)$ of random variables is called a random vector.",
    dependants: [],
    implications: [
      {
        name: "Discrete random variable",
        type: "definition",
        content: "A random variable $X$ whose $X(\\Omega)$ is countable.",
        dependants: [],
      },
    ]
  },
  {
    name: "Distribution function",
    type: "definition",
    content: "The distribution function of a random variable $X$ is expressed as $F_X: \\mathbb{R}\\to [0,1]$, such that $$F_X(x) = \\mathbb{P}(X\\le x) = \\mathbb{P}(X\\in[-\\infty,x])$$",
    dependants: [],
    implications: [
      {
        name: "Absolutely continuous random variable",
        type: "definition",
        content: `A random variable $X$ such that there exists a Borel measurable function $f_X:\\mathbb{R}\\to\\mathbb{R}$ such that
        <br/>
        1) $f(x)\\ge0, \\forall x\\in\\mathbb{R}$;
        <br/>
        2) For any $a,b\\in\\mathbb{R}$ and $a<b$, we have $F_X(b)-F_X(a) = \\int_a^b f_X(x)\\,\\mathrm{d}x$`,
        dependants: [],
      },
    ]
  },
  {
    name: "Convergence of random variables",
    type: "definition",
    content: "",
    dependants: [],
    implications: [
      {
      },
    ]
  },
  {
    name: "Expectation and Conditional expectation",
    type: "definition",
    content: "",
    dependants: [],
  },
  {
    name: "Stochastic Process",
    type: "definition",
    content: "",
    dependants: [],
  },
] as Statement[]