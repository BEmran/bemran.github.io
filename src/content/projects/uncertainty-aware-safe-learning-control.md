---
title: Uncertainty-Aware Safe Learning-Augmented Control
shortDescription: A research program for improving nonlinear robot control under uncertainty while preserving safety, stability, and real-time feasibility.
status: active
projectType: Research Program
startYear: 2026
researchAreas:
- safe-learning-control
- nonlinear-adaptive-control
graduateResearchers: []
undergraduateTeam: []
tags:
- Safe Learning
- Conformal Prediction
- CBF
- Nonlinear Systems
image: /media/project-uav.svg
featured: true
order: 1
---
The project studies how lightweight learned residual models can augment a nominal nonlinear controller without treating the learned prediction as exact.

A current direction uses a small residual neural model, split conformal prediction to calibrate prediction-error bounds, and a Control Barrier Function quadratic-program safety filter. The experimental program compares nominal control, learning augmentation without calibrated uncertainty, and uncertainty-aware safe learning under parameter variation, disturbances, and shifted operating conditions.

Initial validation uses controlled Quanser experiments before extending the methodology to more complex robotic platforms.
