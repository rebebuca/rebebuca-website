# 案例-常见ffmpeg命令

## 分离视频音频流

### 分离视频流

命令如下：

```sh
ffmpeg  -i "/xx/before.mp4" -vcodec "copy" -an  "/xx/after.mp4"
```

### 分离音频流


命令如下：

```sh
ffmpeg  -i "/xx/before.mp4" -acodec "copy" -vn  "/xx/after.mp4"
```

### 视频格式转换

命令如下：

```sh
ffmpeg  -i "/xx/ikun.mp4" -acodec "aac" "/xx/ikun.flv"
```

### 案例-视频剪切

命令如下：

```sh
ffmpeg  -i "/xx/before.mp4" -ss "0:10:0" -t "0:0:30" -vcodec "copy" -acodec "copy"  "/xx/after.mp4"
```

### 案例-视频压缩

命令如下：

```sh
ffmpeg  -i "/xx/before.mp4" -c:v "libx265" -x265-params "crf=18" -y  "/xx/after.mp4"
```

### 推流

命令如下：

```sh
ffmpeg  -i "/xx/ikun.flv" -vcodec "copy" -acodec "copy" -f "flv" -c:v "h264" -c:a "aac"  "rtmp://localhost/live/test"
```