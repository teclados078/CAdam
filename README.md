# CAdam: Context-Adaptive Moment Estimation for 3D Gaussian Densification in Generative Distillation

Official implementation of **CAdam**, accepted to **SIGGRAPH 2026 Conference Papers**.

- Project page: https://teclados078.github.io/cadam/
- arXiv: https://arxiv.org/abs/2605.20872
- Paper: Coming after SIGGRAPH 2026
- Talk: Coming after SIGGRAPH 2026
- Poster: Coming after SIGGRAPH 2026

## Overview

CAdam is a signal-aware densification framework for optimization-based generative 3D Gaussian Splatting. It addresses the densification dilemma caused by stochastic generative guidance, where gradient-magnitude accumulation can confuse transient noise with meaningful geometric signals.

CAdam verifies coherent structural signals using momentum, applies context-adaptive quantile and intrinsic-SNR gating, and selectively refines only reliable Gaussian primitives.

## News

- 2026-05-20: arXiv version released.
- 2026-07: Paper, talk, and poster will be added after SIGGRAPH 2026.

## Citation

See the BibTeX section below.
