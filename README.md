# CAdam: Context-Adaptive Moment Estimation for 3D Gaussian Densification in Generative Distillation

Official repository for **CAdam**, published in **SIGGRAPH 2026 Conference Papers**.

- [Paper](https://dl.acm.org/doi/10.1145/3799902.3811215)
- [arXiv](https://arxiv.org/abs/2605.20872)
- [Project page](https://teclados078.github.io/CAdam/)

## Code Status

This repository currently contains the project website and research overview. The implementation has not been released in this repository.

## Overview

CAdam is a signal-aware densification framework for optimization-based generative 3D Gaussian Splatting. It addresses the densification dilemma caused by stochastic generative guidance, where gradient-magnitude accumulation can confuse transient noise with meaningful geometric signals.

CAdam verifies coherent structural signals using momentum, applies context-adaptive quantile and intrinsic-SNR gating, and selectively refines only reliable Gaussian primitives.

## News

- 2026-07-19: Paper published in SIGGRAPH 2026 Conference Papers.
- 2026-05-20: arXiv version released.

## Citation

```bibtex
@inproceedings{chung2026cadam,
  title={{CAdam}: Context-Adaptive Moment Estimation for {3D Gaussian} Densification in Generative Distillation},
  author={Chung, SeungJeh and Park, Geonho and Kim, Misong and Kang, HyeongYeop},
  booktitle={Proceedings of the Special Interest Group on Computer Graphics and Interactive Techniques Conference Conference Papers},
  series={SIGGRAPH Conference Papers '26},
  year={2026},
  publisher={Association for Computing Machinery},
  pages={1--12},
  doi={10.1145/3799902.3811215},
  url={https://doi.org/10.1145/3799902.3811215}
}
```
