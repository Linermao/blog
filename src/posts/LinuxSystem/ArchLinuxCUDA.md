---
title: ArchLinux CUDA 等显卡适配
date: 2024-9-18 16:23:10
categories: LinuxSystem
cover: '/img/top-img/LinuxSystem/ArchLinuxInstall.png'
---

# ArchLinux CUDA 等显卡适配

## 前言

`Nvidia` 对于 `Linux` 的适配不怎么样，但是在 `ArchLinux` 进行简单的日常使用和深度学习加速还是满足的，并且安装十分简单。

附图一张：

<div align = center>
<img src = "./ArchLinuxCUDA/fuck.png" height = 300px>
</div>

- [参考链接：https://ivonblog.com/posts/archlinux-install-nvidia-drivers/](https://ivonblog.com/posts/archlinux-install-nvidia-drivers/)

## 安装 CUDA

我们在安装系统的时候已经安装了 `nvidia` 的驱动，可以使用

```shell
nvidia-smi
```

来查看驱动是否安装成功。

安装 `CUDA` 驱动，我们只需要在终端输入一行指令：

```shell
sudo pacman -S cuda
```

会自动安装最新的 `CUDA` 版本，如果有需要安装老版本，在 `AUR` 仓库中搜索，使用 `yay` 安装既可

```shell
yay -S cuda-xxx
```

安装完成后，我们需要将 CUDA 的环境变量添加到 `/etc/profile` 中（或者是 `zsh` 和 `bash` 文件），在文件末尾添加：

```shell
export PATH="/opt/cuda/bin$PATH"
export LD_LIBRARY_PATH="/opt/cuda/lib64$PATH"
```

然后使用 `source /etc/profile` 使其生效。

## 安装 miniconda

```shell
yay -S miniconda3
```

在 profile 里写入路径

```shell
export PATH="/opt/miniconda3/bin:$PATH"
```